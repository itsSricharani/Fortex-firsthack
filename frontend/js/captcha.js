(function () {

    let digits = [];

    document.addEventListener("DOMContentLoaded", () => {

        digits = document.querySelectorAll(".captcha-digit");

        digits.forEach((box, idx) => {

            box.addEventListener("keydown", (e) => {

                if (
                    !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Enter"].includes(e.key) &&
                    !/^[0-9]$/.test(e.key)
                ) {
                    e.preventDefault();
                }

                
                if (/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                    box.value = e.key;
                    if (idx < digits.length - 1) digits[idx + 1].focus();
                }

              
                if (e.key === "Backspace") {
                    e.preventDefault();
                    box.value = "";
                    if (idx > 0) digits[idx - 1].focus();
                }

                
                if (e.key === "ArrowRight" && idx < digits.length - 1) digits[idx + 1].focus();
                if (e.key === "ArrowLeft" && idx > 0) digits[idx - 1].focus();

                
                if (e.key === "Enter") {
                    window.validateCaptcha();
                }
            });
        });

        
        window.getCaptchaValue = function () {
            return Array.from(digits).map(d => d.value).join("");
        };
    });

})();
