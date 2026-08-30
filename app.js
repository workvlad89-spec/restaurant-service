document.addEventListener("DOMContentLoaded", function () {

    console.log("APP.JS DZIAŁA");

    const params = new URLSearchParams(window.location.search);
    const tableNumber = params.get("table") || "17";

    document.getElementById("tableNumber").textContent = tableNumber;

    const buttons = document.querySelectorAll("[data-request]");
    const message = document.getElementById("message");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const request = button.getAttribute("data-request");

            console.log("BUTTON CLICKED:", request);

            message.textContent =
                "✅ Wybrano: " + request;

        });

    });

    document.getElementById("reviewButton").addEventListener("click", function () {

        window.open("https://www.google.com/", "_blank");

    });

});
