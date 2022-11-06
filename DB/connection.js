// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAgIqK98FtanOTvhjGOlRI2z4Qt0V_LEo",
    authDomain: "rick-and-morty-pam-uca.firebaseapp.com",
    databaseURL: "https://rick-and-morty-pam-uca-default-rtdb.firebaseio.com",
    projectId: "rick-and-morty-pam-uca",
    storageBucket: "rick-and-morty-pam-uca.appspot.com",
    messagingSenderId: "914821301248",
    appId: "1:914821301248:web:e72fb41caf601d19a984e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
