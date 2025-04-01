  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

  // Add API
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

  const auth = getAuth(app);
  const reg = document.getElementById('reg');
  const log = document.getElementById('log');


  //Driver
  reg.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail-reg').value;
    let pass = document.getElementById('pass-reg').value;
    let pass2 = document.getElementById('repeat-password').value;
    if (pass.length < 8) {
        alert("Password must be at least 8 characters long");
    }
    else if (pass != pass2) {
        alert("Passwords do not match");
    }
    else {
        createUserWithEmailAndPassword(auth, mail, pass)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName: document.getElementById('user').value, score: 0
        }).then(() => {
            console.log("User profile updated");
        }).catch((error) => {
            console.log(error);
        });
        })
        //Error Handle
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorMessage) {
          case "Firebase: Error (auth/invalid-email).":
            alert("Invalid email");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            alert("Account already exists");
            break;
          default:
            alert(errorMessage);
        }
        // ..
        });
    }
});