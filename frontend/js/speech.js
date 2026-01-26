
/*let currentUtterance = null;
let isPaused = false;
let activeHighlightEl = null;

window.addEventListener("beforeunload", () => {
  speechSynthesis.cancel();
});





function getSpeechLang() {
  if (currentLang === "hi") return "hi-IN";
  if (currentLang === "te") return "te-IN"; // fallback, may still be English voice
  return "en-US";
}

function speakText(text) {
  if (!text || !text.trim()) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = getSpeechLang();

  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === utter.lang);
  if (voice) utter.voice = voice;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".speaker-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      // read only nearby content, not whole body
      const container =
        btn.closest(".content") ||
        btn.closest(".hero-text") ||
        btn.closest(".result-box") ||
        document.body;

      speakText(container.innerText);
    });
  });
});


const pauseBtn = document.querySelector(".pause-btn");

if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    if (!speechSynthesis.speaking) return;

    const icon = pauseBtn.querySelector(".pause-icon");

    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        icon.textContent = "⏸";
    } else {
        speechSynthesis.pause();
        icon.textContent = "▶";
    }
});
}
*/

let currentUtterance = null;

window.addEventListener("beforeunload", () => {
  speechSynthesis.cancel();
});

function getSpeechLang() {
  if (currentLang === "hi") return "hi-IN";
  if (currentLang === "te") return "te-IN";
  return "en-US";
}

/**
 * Reads ONLY the element with the given ID
 * (summary / intent / risk / deadline)
 */
function speakText(id) {
  speechSynthesis.cancel();

  const el = document.getElementById(id);
  if (!el) return;

  const text = el.innerText.trim();
  if (!text) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = getSpeechLang();

  const voices = speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === utter.lang);
  if (voice) utter.voice = voice;

  currentUtterance = utter;
  speechSynthesis.speak(utter);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-speak-page]").forEach(btn => {
    btn.addEventListener("click", () => {
      speechSynthesis.cancel();

      const container =
        btn.closest(".content") ||
        btn.closest(".hero-text") ||
        document.querySelector("main") ||
        document.body;

      const text = container.innerText.trim();
      if (!text) return;

      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = getSpeechLang();

      const voices = speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === utter.lang);
      if (voice) utter.voice = voice;

      currentUtterance = utter;
      speechSynthesis.speak(utter);
    });
  });
});

const pauseBtn = document.querySelector(".pause-btn");

if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    if (!speechSynthesis.speaking) return;

    const icon = pauseBtn.querySelector(".pause-icon");

    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        icon.textContent = "⏸";
    } else {
        speechSynthesis.pause();
        icon.textContent = "▶";
    }
});
}