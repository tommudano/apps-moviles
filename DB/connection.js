import * as firebase from "firebase/app";
import { getDatabase } from "firebase/database";

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
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

export default { app, db };
