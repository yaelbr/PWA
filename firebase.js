import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNhtfDm2wDFZG1VGiXpMFhy9LaT6W2JmM",
    authDomain: "pwa--project.firebaseapp.com",
    projectId: "pwa--project",
    storageBucket: "pwa--project.appspot.com",
    messagingSenderId: "1019909768765",
    appId: "1:1019909768765:web:6cf28cde31888dd955cc54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging
    .requestPermission()
    .then(() => {
        console.log("Notification permission granted.");
        // You can handle the logic for sending push notifications here
    })
    .catch((error) => {
        console.log("Notification permission denied: ", error);
    });
messaging.onMessage((payload) => {
    console.log("Received push notification: ", payload);
    // Handle the incoming push notification here
});