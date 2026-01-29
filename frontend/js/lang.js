let currentLang = localStorage.getItem("lang") || "en";

const translations = {
    en: {
        home: "Home",
        guidelines: "Guidelines",
        safety: "Safety",
        hero_title: "LEGAL NOTICES,<br>EXPLAINED CLEARLY.",
        hero_desc: "A simple platform that explains legal notices in plain language, highlights deadlines, and shows potential risks — without legal advice.",
        hero_btn: "Try Now!",
        privacy_title: "Your Privacy, Our Priority",
        privacy_desc: "Documents and text submitted for analysis are not stored, indexed, or tracked. Processing happens only to generate results, after which the data is discarded. Your information remains private and under your control.",
        access_title: "Accessible by Design",
        access_desc: "The platform supports English, Hindi, and Telugu — including content written in native scripts or English transliteration. A built-in voice feature can read simplified outputs aloud, improving accessibility for users who prefer listening over reading.",
        usage_title: "One Tool, Multiple Uses",
        usage_desc: "From rent disputes and payment demands to government notices, compliance reminders, and contractual warnings — a wide range of legal documents can be simplified using a single interface.",
        guidelines_title: "Usage Guidelines",
        guidelines_desc1: "This platform is intended to help users understand legal notices in simple, plain language. It does not replace professional legal consultation.",
        guidelines_desc2: "The explanations provided are informational in nature and are generated using automated analysis. They may not capture every legal nuance.",
        guidelines_desc3: "Users are advised to consult a qualified legal professional for formal advice or legal action.",
        safety_title: "Your privacy, our priority.",
        safety_desc1: "Any text or document you submit is processed only for analysis and is not stored, logged, or shared.",
        safety_desc2: "Uploaded files are handled temporarily and discarded after processing. We do not maintain user histories or retain legal documents.",
        safety_desc3: "This platform is designed with privacy-first principles in mind.",
        analyze_title: "Analyze a Legal Notice",
        analyze_desc: "Paste the legal notice text below or upload a PDF document. The system will extract key information in simple language.",
        analyze_btn: "Analyze",
        analyze_placeholder: "Paste legal notice text here...",
        summary_title: "Summary",
        intent_title: "Intent",
        deadline_title: "Deadline",
        risk_title: "Risk",
        choose_file: "Choose File",
        remove_file: "Remove Selected File",
        captcha_title: "Verify you are human",
        captcha_verify: "Verify",
        guidelines_card1_title: "Purpose of this platform",
        guidelines_card2_title: "Limitations",
        guidelines_card3_title: "User responsibility",
        safety_card1_title: "No data storage",
        safety_card2_title: "Temporary processing",
        safety_card3_title: "Privacy-first design",
        results_title: "Legal Notice Analysis",
        summary_title: "Summary",
        intent_title: "Intent",
        risk_title: "Risk",
        deadline_title: "Deadline",
        next_steps: "What to do next ?",
        risk_indicator: "Risk Indicator",
        try_again: "Try Another Notice !!",
        results_disclaimer:
        "⚠️ This analysis is generated using AI and rule-based systems. It is not legal advice. Please consult a qualified lawyer before taking any legal action.",
        nextsteps_page_title: "What to do next",
        nextsteps_title: "What you should do next",
        nextsteps_1: "Read the summary carefully.",
        nextsteps_2: "Understand the intent of the notice.",
        nextsteps_3: "Check deadlines and note them.",
        nextsteps_4: "Collect supporting documents.",
        nextsteps_5: "Consult a lawyer if risk is medium or high.",
        nextsteps_disclaimer:
        "This page is guidance only and does not replace legal advice."







    },
    hi: {
        home: "होम",
        guidelines: "निर्देश",
        safety: "सुरक्षा",
        hero_title: "क़ानूनी नोटिस,<br>साफ़-साफ़ समझाएँ।",
        hero_desc: "एक साधारण प्लेटफ़ॉर्म जो कानूनी नोटिस को सरल भाषा में समझाता है, समयसीमा को हाइलाइट करता है, और संभावित जोखिम दिखाता है — बिना कानूनी सलाह के।",
        hero_btn: "अब आज़माएँ!",
        privacy_title: "आपकी गोपनीयता, हमारी प्राथमिकता",
        privacy_desc: "विश्लेषण के लिए सबमिट किए गए दस्तावेज़ और टेक्स्ट संग्रहीत, अनुक्रमित या ट्रैक नहीं किए जाते। प्रक्रिया केवल परिणाम उत्पन्न करने के लिए होती है, उसके बाद डेटा हटा दिया जाता है। आपकी जानकारी निजी रहती है।",
        access_title: "डिज़ाइन द्वारा सुलभ",
        access_desc: "प्लेटफ़ॉर्म अंग्रेज़ी, हिंदी और तेलुगु का समर्थन करता है — जिसमें मूल लिपियों या अंग्रेज़ी ट्रांसलिटरेशन में सामग्री शामिल है। अंतर्निर्मित वॉइस फ़ीचर सरल आउटपुट को पढ़ सकता है।",
        usage_title: "एक उपकरण, कई उपयोग",
        usage_desc: "किराया विवाद और भुगतान मांगों से लेकर सरकारी नोटिस, अनुपालन अनुस्मारक और संविदात्मक चेतावनियों तक — कई प्रकार के कानूनी दस्तावेज़ों को एक ही इंटरफ़ेस से सरल किया जा सकता है।",
        guidelines_title: "उपयोग निर्देश",
        guidelines_desc1: "यह प्लेटफ़ॉर्म उपयोगकर्ताओं को कानूनी नोटिस को सरल भाषा में समझने में मदद करने के लिए बनाया गया है। यह पेशेवर कानूनी परामर्श का स्थान नहीं लेता।",
        guidelines_desc2: "प्रदान की गई व्याख्याएँ सूचनात्मक प्रकृति की हैं और स्वचालित विश्लेषण का उपयोग करके उत्पन्न की जाती हैं। ये हर कानूनी बारीकी को पकड़ नहीं सकती।",
        guidelines_desc3: "उपयोगकर्ताओं को औपचारिक सलाह या कानूनी कार्रवाई के लिए योग्य कानूनी पेशेवर से परामर्श करने की सलाह दी जाती है।",
        safety_title: "आपकी गोपनीयता, हमारी प्राथमिकता।",
        safety_desc1: "आप जो टेक्स्ट या दस्तावेज़ सबमिट करते हैं वह केवल विश्लेषण के लिए संसाधित होता है और संग्रहीत या साझा नहीं किया जाता।",
        safety_desc2: "अपलोड किए गए फ़ाइलों को अस्थायी रूप से संभाला जाता है और प्रक्रिया के बाद हटा दिया जाता है। हम उपयोगकर्ता इतिहास या कानूनी दस्तावेज़ नहीं रखते।",
        safety_desc3: "यह प्लेटफ़ॉर्म गोपनीयता-प्रथम सिद्धांतों के साथ डिज़ाइन किया गया है।",
        analyze_title: "क़ानूनी नोटिस का विश्लेषण करें",
        analyze_desc: "नीचे कानूनी नोटिस टेक्स्ट पेस्ट करें या PDF अपलोड करें। सिस्टम मुख्य जानकारी सरल भाषा में निकालेगा।",
        analyze_btn: "विश्लेषण करें",
        analyze_placeholder: "कृपया कानूनी नोटिस यहाँ पेस्ट करें...",
        summary_title: "सारांश",
        intent_title: "इरादा",
        deadline_title: "समयसीमा",
        risk_title: "जोखिम",
        choose_file: "फ़ाइल चुनें",
        remove_file: "चयनित फ़ाइल हटाएँ",
        captcha_title: "कृपया पुष्टि करें कि आप मानव हैं",
        captcha_verify: "सत्यापित करें",
        guidelines_card1_title: "इस प्लेटफ़ॉर्म का उद्देश्य",
        guidelines_card2_title: "सीमाएँ",
        guidelines_card3_title: "उपयोगकर्ता की ज़िम्मेदारी",
        safety_card1_title: "कोई डेटा संग्रह नहीं",
        safety_card2_title: "अस्थायी प्रोसेसिंग",
        safety_card3_title: "गोपनीयता-प्रथम डिज़ाइन",
        results_title: "कानूनी नोटिस विश्लेषण",
        summary_title: "सारांश",
        intent_title: "इरादा",
        risk_title: "जोखिम",
        deadline_title: "समयसीमा",
        next_steps: "अब क्या करें?",
        risk_indicator: "जोखिम संकेतक",
        try_again: "दूसरा नोटिस आज़माएँ !!",
        results_disclaimer:
        "⚠️ यह विश्लेषण AI और नियम-आधारित प्रणालियों द्वारा बनाया गया है। यह कानूनी सलाह नहीं है। कोई भी कानूनी कदम उठाने से पहले योग्य वकील से सलाह लें।",
        nextsteps_page_title: "अगला कदम",
        nextsteps_title: "आपको आगे क्या करना चाहिए",
        nextsteps_1: "सारांश को ध्यान से पढ़ें।",
        nextsteps_2: "नोटिस के उद्देश्य को समझें।",
        nextsteps_3: "समय सीमा जांचें और नोट करें।",
        nextsteps_4: "सहायक दस्तावेज़ इकट्ठा करें।",
        nextsteps_5:
        "यदि जोखिम मध्यम या उच्च है तो वकील से सलाह लें।",
        nextsteps_disclaimer:
        "यह पृष्ठ केवल मार्गदर्शन के लिए है और कानूनी सलाह का विकल्प नहीं है।"




    },
    te: {
        home: "హోమ్",
        guidelines: "మార్గదర్శకాలు",
        safety: "సురక్షితం",
        hero_title: "చట్ట నోటీసులు,<br>స్పష్టంగా వివరించబడినవి.",
        hero_desc: "సాదా భాషలో చట్ట నోటీసులను వివరిస్తూ, గడువులను హైలైట్ చేస్తూ, పొటెన్షియల్ రిస్క్ చూపే సులభమైన ప్లాట్‌ఫారం — లీగల్ సలహా లేనివి.",
        hero_btn: "ఇప్పుడు ప్రయత్నించండి!",
        privacy_title: "మీ గోప్యత, మా ప్రాధాన్యత",
        privacy_desc: "విశ్లేషణ కోసం సమర్పించిన డాక్యుమెంట్లు లేదా టెక్స్ట్ నిల్వ చేయబడదు, సూచిక చేయబడదు లేదా ట్రాక్ చేయబడదు. ప్రాసెసింగ్ ఫలితాలను ఉత్పత్తి చేయడానికి మాత్రమే జరుగుతుంది.",
        access_title: "డిజైన్ ద్వారా సులభత",
        access_desc: "ప్లాట్‌ఫారం ఇంగ్లీష్, హిందీ మరియు తెలుగు భాషలకు మద్దతు ఇస్తుంది — స్థానిక లిపులు లేదా ఇంగ్లీష్ ట్రాన్స్లిటరేషన్‌లో కంటెంట్. బిల్ట్-ఇన్ వాయిస్ ఫీచర్ సులభమైన అవుట్పుట్‌ని చదవగలదు.",
        usage_title: "ఒక టూల్, బహుళ ఉపయోగాలు",
        usage_desc: "వാടക వివాదాలు మరియు చెల్లింపు డిమాండ్ల నుండి ప్రభుత్వ నోటీసులు, కంప్లయెన్స్ రిమైండర్లు మరియు కాంట్రాక్చువల్ వార్నింగ్స్ వరకు — విస్తృత రేంజ్ చట్ట డాక్యుమెంట్లను ఒకే ఇంటర్ఫేస్ ద్వారా సరళీకృతం చేయవచ్చు.",
        guidelines_title: "వాడుక మార్గదర్శకాలు",
        guidelines_desc1: "ఈ ప్లాట్‌ఫారం వినియోగదారులు చట్ట నోటీసులను సులభ భాషలో అర్థం చేసుకునేందుకు రూపొందించబడింది. ఇది ప్రొఫెషనల్ లీగల్ కన్సల్టేషన్‌ను స్థానపరిష్కరించదు.",
        guidelines_desc2: "ఇవ్వబడిన వివరణలు సమాచారాత్మక స్వభావం కలిగినవి మరియు ఆటోమేటెడ్ విశ్లేషణ ఉపయోగించి ఉత్పత్తి చేయబడ్డాయి. ఇవి ప్రతి చట్ట పునఃసవరణను పట్టుకోలేవు.",
        guidelines_desc3: "వినియోగదారులు ఫార్మల్ సలహా లేదా చట్ట చర్య కోసం అర్హత కలిగిన లీగల్ ప్రొఫెషనల్‌ను సంప్రదించడానికి సలహా ఇవ్వబడుతుంది.",
        safety_title: "మీ గోప్యత, మా ప్రాధాన్యత.",
        safety_desc1: "మీరు సమర్పించిన టెక్స్ట్ లేదా డాక్యుమెంట్ కేవలం విశ్లేషణ కోసం ప్రాసెస్ చేయబడుతుంది మరియు నిల్వ లేదా పంచబడదు.",
        safety_desc2: "అప్‌లోడ్ చేసిన ఫైల్స్ తాత్కాలికంగా నిర్వహించబడతాయి మరియు ప్రాసెసింగ్ తర్వాత తొలగించబడతాయి. మేము యూజర్ హిస్టరీ లేదా లీగల్ డాక్యుమెంట్లను నిల్వ చేయము.",
        safety_desc3: "ఈ ప్లాట్‌ఫారం ప్రైవసీ-ఫస్ట్ సిద్దాంతాలతో రూపొందించబడింది.",
        analyze_title: "చట్ట నోటీస్ విశ్లేషణ",
        analyze_desc: "క్రింది చట్ట నోటీసు టెక్స్ట్ ను పేస్ట్ చేయండి లేదా PDF అప్లోడ్ చేయండి. సిస్టమ్ ముఖ్య సమాచారాన్ని సులభ భాషలో వెలికితీస్తుంది.",
        analyze_btn: "విశ్లేషణ చేయండి",
        analyze_placeholder: "ఇక్కడ చట్ట నోటీసు టెక్స్ట్ పేస్ట్ చేయండి...",
        summary_title: "సారాంశం",
        intent_title: "ఉద్దేశం",
        deadline_title: "కాల పరిమితి",
        risk_title: "రిస్క్",
        choose_file: "ఫైల్ ఎంచుకోండి",
        remove_file: "ఎంచుకున్న ఫైల్ తొలగించండి",
        captcha_title: "దయచేసి మీరు మనిషి అని నిర్ధారించండి",
        captcha_verify: "ధృవీకరించండి",
        guidelines_card1_title: "ఈ ప్లాట్‌ఫారం యొక్క ఉద్దేశ్యం",
        guidelines_card2_title: "పరిమితులు",
        guidelines_card3_title: "వినియోగదారుల బాధ్యత",
        safety_card1_title: "డేటా నిల్వ చేయదు",
        safety_card2_title: "తాత్కాలిక ప్రాసెసింగ్",
        safety_card3_title: "గోప్యత-మొదటి డిజైన్",
        results_title: "చట్ట నోటీస్ విశ్లేషణ",
        summary_title: "సారాంశం",
        intent_title: "ఉద్దేశం",
        risk_title: "రిస్క్",
        deadline_title: "గడువు",
        next_steps: "తరువాత ఏమి చేయాలి?",
        risk_indicator: "రిస్క్ సూచిక",
        try_again: "మరొక నోటీస్ ప్రయత్నించండి !!",
        results_disclaimer:
        "⚠️ ఈ విశ్లేషణ AI మరియు నియమాల ఆధారిత వ్యవస్థల ద్వారా రూపొందించబడింది. ఇది చట్ట సలహా కాదు. ఏదైనా చట్టపరమైన చర్య తీసుకునే ముందు అర్హత కలిగిన న్యాయవాదిని సంప్రదించండి.",
        nextsteps_page_title: "తదుపరి చర్యలు",
        nextsteps_title: "మీరు తదుపరి ఏమి చేయాలి",
        nextsteps_1: "సారాంశాన్ని జాగ్రత్తగా చదవండి.",
        nextsteps_2: "నోటీసు ఉద్దేశాన్ని అర్థం చేసుకోండి.",
        nextsteps_3: "గడువులను పరిశీలించి గుర్తుంచుకోండి.",
        nextsteps_4: "మద్దతు పత్రాలను సేకరించండి.",
        nextsteps_5:
        "ప్రమాదం మధ్యస్థం లేదా ఎక్కువగా ఉంటే న్యాయవాదిని సంప్రదించండి.",
        nextsteps_disclaimer:
        "ఈ పేజీ కేవలం మార్గదర్శకత్వం మాత్రమే; ఇది న్యాయ సలహాకు ప్రత్యామ్నాయం కాదు."



        
  

    }
};

const brandNames = {
    en: "NyāyMārg",
    hi: "न्यायमार्ग",
    te: "న్యాయమార్గం"
};


function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if(translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if(translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    updateBrand(lang);
    updateLanguageButton(lang);
}

function updateBrand(lang) {
    const brand = document.getElementById("brandName");
    if (brand) brand.textContent = brandNames[lang];
}

function updateLanguageButton(lang) {
    const btn = document.getElementById("languageBtn");
    if (!btn) return;

    btn.innerText =
        lang === "hi" ? "भाषा" :
        lang === "te" ? "భాష" :
        "Language";
}



function setupLanguageSwitcher() {
    document.querySelectorAll(".lang-dropdown div").forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.dataset.lang;
            localStorage.setItem("lang", lang);
            currentLang = lang;
            applyLanguage(lang);
        });
    }); 
}


document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    setupLanguageSwitcher();
});