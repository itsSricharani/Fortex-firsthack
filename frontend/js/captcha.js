(function () {

    const captchaTextMap = {
        en: "Verify you are human",
        hi: "कृपया पुष्टि करें कि आप मानव हैं",
        te: "దయచేసి మీరు మనిషి అని నిర్ధారించండి"
    };

    const buttonTextMap = {
        en: "Verify",
        hi: "सत्यापित करें",
        te: "ధృవీకరించండి"
    };

    const inputPlaceholderMap = {
        en: "Enter the code",
        hi: "कोड दर्ज करें",
        te: "కోడ్ నమోదు చేయండి"
    };

    function updateCaptchaTextHard() {
        document.querySelectorAll("*").forEach(el => {
            if (!el.children.length && el.innerText) {
                const text = el.innerText.trim();

                if (
                    text === "Verify you are human" ||
                    text === "कृपया पुष्टि करें कि आप मानव हैं" ||
                    text === "దయచేసి మీరు మనిషి అని నిర్ధారించండి"
                ) {
                    el.innerText = captchaTextMap[currentLang];
                }

                if (
                    text === "Verify" ||
                    text === "सत्यापित करें" ||
                    text === "ధృవీకరించండి"
                ) {
                    el.innerText = buttonTextMap[currentLang];
                }
            }
        });

        // Input placeholder
        document.querySelectorAll("input").forEach(input => {
            if (
                input.placeholder === "Enter the code" ||
                input.placeholder === "कोड दर्ज करें" ||
                input.placeholder === "కోడ్ నమోదు చేయండి"
            ) {
                input.placeholder = inputPlaceholderMap[currentLang];
            }
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const digits = document.querySelectorAll(".captcha-digit");

        digits.forEach((box, idx) => {
            box.addEventListener("input", () => {
                if (box.value && idx < digits.length - 1) {
                    digits[idx + 1].focus();
                }
            });

            box.addEventListener("keydown", e => {
                if (e.key === "Backspace" && !box.value && idx > 0) {
                    digits[idx - 1].focus();
                }
            });
        });

        window.getCaptchaValue = function () {
            return Array.from(digits).map(d => d.value).join("");
        };

        // Update multilingual texts
        updateCaptchaTextHard();
    });
})();
