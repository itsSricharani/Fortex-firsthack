from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2
import re
import os
import requests
import json

app = Flask(__name__)
CORS(app)



OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

@app.route("/")
def home():
    return "Backend running (AI + rule-based fallback mode)"


def extract_deadline(text):
    match = re.search(r'within\s+(\d+)\s+days', text.lower())
    if match:
        return f"Within {match.group(1)} days"
    return "Not found"

def rule_based_analysis(text):
    text_lower = text.lower()

    summary = "This notice asks you to take certain actions mentioned in the document."
    intent = "Unknown"
    risk = "Unknown"

    if "rent" in text_lower or "lease" in text_lower:
        intent = "Recovery of unpaid rent"
        summary = "The notice demands payment of pending rent or lease dues."

    elif "electricity" in text_lower or "bill" in text_lower or "outstanding" in text_lower:
        intent = "Payment of pending dues"
        summary = "The notice demands payment of outstanding dues or bills."

    elif "loan" in text_lower or "emi" in text_lower or "bank" in text_lower:
        intent = "Loan repayment demand"
        summary = "The notice demands repayment of a loan or instalments."

    elif "breach" in text_lower or "terminat" in text_lower:
        intent = "Contract or agreement violation"
        summary = "The notice refers to a breach or violation of agreed terms."

    elif "non-compliance" in text_lower or "penalty" in text_lower or "statutory" in text_lower:
        intent = "Compliance violation"
        summary = "The notice highlights a regulatory or statutory compliance issue."

    if "legal action" in text_lower or "court" in text_lower or "proceedings" in text_lower:
        risk = "High"
    elif "failure to comply" in text_lower:
        risk = "Medium"
    else:
        risk = "Low"

    return intent, summary, risk


def ai_analysis(text, lang="en"):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }
    language_instruction = {
        "en": "Respond in English.",
        "hi": "Respond in Hindi (Devanagari script).",
        "te": "Respond in Telugu script."
    }.get(lang, "Respond in English.")
    
    payload = {
        "model": "arcee-ai/trinity-mini:free",
        "messages": [
            {
                "role": "system",
                "content": f"""
                You are a legal notice analyzer.

                LANGUAGE RULE (MANDATORY):
                {language_instruction}

                Return ONLY valid JSON with keys:
                summary, intent, deadline, risk

                Rules:
                - Keep language simple and clear
                - No explanations
                - No English words if language is Hindi or Telugu
                - JSON only
                """
            },
            {
                "role": "user",
                "content": text
            }
        ]
    }

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=payload,
        timeout=15
    )

    response.raise_for_status()
    result = response.json()

    raw_content = result["choices"][0]["message"]["content"]

    # LOG FOR DEBUGGING
    print("AI RAW RESPONSE:\n", raw_content)

    parsed = json.loads(raw_content)

    return {
        "summary": parsed.get("summary", "Unknown"),
        "intent": parsed.get("intent", "Unknown"),
        "deadline": parsed.get("deadline", "Not found"),
        "risk": parsed.get("risk", "Unknown")
    }



@app.route("/analyze", methods=["POST"])
def analyze_text():
    data = request.get_json()
    text = data.get("text", "").strip()
    lang = data.get("lang", "en")

    if not text or len(text) < 20:
        return jsonify({
            "summary": "Insufficient information to analyze notice.",
            "intent": "Unknown",
            "deadline": "Not found",
            "risk": "Unknown"
        })

    # TRY AI FIRST
    if OPENROUTER_API_KEY:
        try:
            ai_result = ai_analysis(text, lang)
            ai_result = enforce_language(ai_result, lang)
            return jsonify(ai_result)

        except Exception as e:
            print("AI failed, falling back:", e)

    # FALLBACK TO RULE-BASED
    deadline = extract_deadline(text)
    intent, summary, risk = rule_based_analysis(text)

    return jsonify({
        "summary": summary,
        "intent": intent,
        "deadline": deadline,
        "risk": risk,
        

    

    })

def enforce_language(result, lang):
    if lang == "en":
        return result

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    translate_prompt = {
        "hi": "Translate the JSON values into Hindi (Devanagari). Keep keys unchanged.",
        "te": "Translate the JSON values into Telugu script. Keep keys unchanged."
    }[lang]

    payload = {
        "model": "arcee-ai/trinity-mini:free",
        "messages": [
            {"role": "system", "content": translate_prompt},
            {"role": "user", "content": json.dumps(result, ensure_ascii=False)}
        ]
    }

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=payload,
        timeout=15
    )

    return json.loads(response.json()["choices"][0]["message"]["content"])



@app.route("/analyze-pdf", methods=["POST"])
def analyze_pdf():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    lang = request.form.get("lang", "en")
    if file.filename == "":
        return jsonify({"error": "Empty file uploaded"}), 400

    # Basic file type check
    if not file.filename.lower().endswith(".pdf"):
        return jsonify({
            "summary": "Uploaded file is not a PDF.",
            "intent": "Unknown",
            "deadline": "Not found",
            "risk": "Unknown"
        })

    try:
        reader = PyPDF2.PdfReader(file)
    except Exception as e:
        print("PDF READ ERROR:", e)
        return jsonify({
            "summary": "The uploaded PDF could not be read. It may be scanned, corrupted, or unsupported.",
            "intent": "Unknown",
            "deadline": "Not found",
            "risk": "Unknown"
        })

    text = ""
    for page in reader.pages:
        try:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"
        except Exception:
            continue

    if len(text.strip()) == 0:
        return jsonify({
            "summary": "The PDF does not contain readable text.",
            "intent": "Unknown",
            "deadline": "Not found",
            "risk": "Unknown"
        })

    # TRY AI FIRST
    if OPENROUTER_API_KEY:
        try:
            ai_result = ai_analysis(text, lang)
            ai_result = enforce_language(ai_result, lang)
            return jsonify(ai_result)
        except Exception as e:
            print("AI failed for PDF, falling back:", e)

    # FALLBACK
    deadline = extract_deadline(text)
    intent, summary, risk = rule_based_analysis(text)

    return jsonify({
        "summary": summary,
        "intent": intent,
        "deadline": deadline,
        "risk": risk
    })


@app.route("/find-lawyer", methods=["POST"])
def find_lawyer():
    data = request.get_json()
    city = data.get("city", "").lower()

    file_path = os.path.join(os.path.dirname(__file__), "lawyers.json")

    with open(file_path, "r") as f:
        lawyers = json.load(f)

    results = [l for l in lawyers if l["city"].lower() == city]
    print("FIND LAWYER CALLED")
    print("CITY:", city)
    print("FILE PATH:", file_path)

    return jsonify(results)



if __name__ == "__main__":
    app.run()
