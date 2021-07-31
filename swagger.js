document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function () {
        document.querySelectorAll(".opblock-summary").forEach(item => {
            if(item.parentElement.classList.contains("is-open")) {
                setTimeout(function () {
                    var buttons = item.parentElement.getElementsByClassName("try-out__btn");
                    if (buttons) {
                        if (!buttons[0].classList.contains("cancel")) {
                            buttons[0].click();
                        }
                    }
                },
                100);
            }

            item.addEventListener("click",() => {
                setTimeout(function () {
                    var buttons = item.parentElement.getElementsByClassName("try-out__btn");
                    if (buttons) {
                        if (!buttons[0].classList.contains("cancel")) {
                            buttons[0].click();
                        }
                    }
                },
                100);
            });
        });
    },
    1500);
});