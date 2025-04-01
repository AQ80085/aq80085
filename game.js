import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyA6TUJZX-pPmLXxHgurUDWPWt385Z_-ZyQ",
    authDomain: "quaniscool-5c45b.firebaseapp.com",
    projectId: "quaniscool-5c45b",
    storageBucket: "quaniscool-5c45b.firebasestorage.app",
    messagingSenderId: "582784855098",
    appId: "1:582784855098:web:f3f125aa579023314ed903",
    measurementId: "G-NDP6TEWMWB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const home = getAuth(app);
const db = getFirestore(app);

let text=document.getElementById("click");
let a = 0;
let img = document.getElementById("bnn");
function hi() {
    a+=1;
    if (a==2000000000) {
        alert("Congratulation! You have wasted your time! Now enjoy clicking back");
        a=0;
    }
    text.innerHTML=a;
}

onAuthStateChanged(home, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const name = user.displayName;
        console.log(uid);
        console.log(name);
        console.log(user.score);
        // ...
    } else {
        console.log('User is signed out');
        window.location = 'login.html';
    }
});