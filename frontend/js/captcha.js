(function () {

    let digits = [];

    document.addEventListener("DOMContentLoaded", () => {

        digits = document.querySelectorAll(".captcha-digit");

        digits.forEach((box, idx) => {

            box.addEventListener("keydown", (e) => {

                // Allow only digits and control keys
                if (
                    !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Enter"].includes(e.key) &&
                    !/^[0-9]$/.test(e.key)
                ) {
                    e.preventDefault();
                }

                // Digit typed
                if (/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                    box.value = e.key;
                    if (idx < digits.length - 1) digits[idx + 1].focus();
                }

                // Backspace
                if (e.key === "Backspace") {
                    e.preventDefault();
                    box.value = "";
                    if (idx > 0) digits[idx - 1].focus();
                }

                // Arrow navigation
                if (e.key === "ArrowRight" && idx < digits.length - 1) digits[idx + 1].focus();
                if (e.key === "ArrowLeft" && idx > 0) digits[idx - 1].focus();

                // Enter submits captcha
                if (e.key === "Enter") {
                    window.validateCaptcha();
                }
            });
        });

        // Expose getter for analyze.html
        window.getCaptchaValue = function () {
            return Array.from(digits).map(d => d.value).join("");
        };
    });

})();
