// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_kilHcQXgqW-YbG0XX7H-r3qi7mlpMUE",
    authDomain: "chateau-phonique.firebaseapp.com",
    databaseURL: "https://chateau-phonique-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chateau-phonique",
    storageBucket: "chateau-phonique.appspot.com",
    messagingSenderId: "959514260383",
    appId: "1:959514260383:android:1d810ba13c7b811c2203aa",
    measurementId: "G-6DHDHT2YEY"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);