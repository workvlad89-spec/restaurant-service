import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAf1M8hjAJ12p3X3CbZ_s8kjcYq7LTiqWo",
    authDomain: "restaurant-service-a66ae.firebaseapp.com",
    databaseURL: "https://restaurant-service-a66ae-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "restaurant-service-a66ae",
    storageBucket: "restaurant-service-a66ae.firebasestorage.app",
    messagingSenderId: "618221341596",
    appId: "1:618221341596:web:d2e01582254ed048165659"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const params = new URLSearchParams(window.location.search);
const tableNumber = params.get("table") || "17";

document.getElementById("tableNumber").textContent = tableNumber;

window.sendRequest = async function(requestType) {
    const message = document.getElementById("message");

    message.textContent = "Wysyłanie...";

    try {
        const requestRef = push(ref(database, "requests"));

        await set(requestRef, {
            restaurantId: "restaurant_001",
            table: tableNumber,
            request: requestType,
            status: "new",
            createdAt: Date.now()
        });

        message.textContent = "✅ Kelner został powiadomiony.";

    } catch (error) {
        console.error("Firebase error:", error);
        message.textContent = "❌ Wystąpił błąd.";
    }
};

window.openReview = function() {
    window.open("https://www.google.com/", "_blank");
};
