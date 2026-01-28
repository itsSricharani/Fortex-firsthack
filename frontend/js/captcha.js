(function () {

    let inputs;
    let verifyFn;

    document.addEventListener("DOMContentLoaded", () => {

        inputs = document.querySelectorAll(".captcha-digit");

        inputs.forEach((input, index) => {

            input.addEventListener("keydown", (e) => {

                // allow only numbers + control keys
                if (
                    !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Enter"].includes(e.key) &&
                    !/^[0-9]$/.test(e.key)
                ) {
                    e.preventDefault();
                }

                // number typed
                if (/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                    input.value = e.key;
                    if (index < inputs.length - 1) inputs[index + 1].focus();
                }

                // backspace
                if (e.key === "Backspace") {
                    e.preventDefault();
                    input.value = "";
                    if (index > 0) inputs[index - 1].focus();
                }

                // arrows
                if (e.key === "ArrowRight" && index < inputs.length - 1) inputs[index + 1].focus();
                if (e.key === "ArrowLeft" && index > 0) inputs[index - 1].focus();

                // enter = submit
                if (e.key === "Enter") {
                    window.validateCaptcha();
                }
            });
        });

        // expose value getter
        window.getCaptchaValue = function () {
            return Array.from(inputs).map(i => i.value).join("");
        };
    });

})();
