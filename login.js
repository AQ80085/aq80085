  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = getAuth(app)
  const log = document.getElementById('log')

log.addEventListener("click", function(event) {
    event.preventDefault();
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location = 'index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("invalid email or password");
  });
  
});