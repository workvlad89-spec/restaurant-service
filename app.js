document.addEventListener("DOMContentLoaded", function () {

    console.log("APP.JS DZIAŁA");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message = document.getElementById("message");

            message.textContent = "✅ TEST DZIAŁA";

            console.log("BUTTON CLICKED");

        });

    });

});
