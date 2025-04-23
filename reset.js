import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyCwe_xxKpsKDCteEO8VsfFqx_NpQsOd1N8",
    authDomain: "userlogins-afbe2.firebaseapp.com",
    projectId: "userlogins-afbe2",
    storageBucket: "userlogins-afbe2.firebasestorage.app",
    messagingSenderId: "277324386375",
    appId: "1:277324386375:web:4115536ae37567fc342162",
    measurementId: "G-0260JJM9D9"
  };

  const app = initializeApp(firebaseConfig);

  document.getElementById("reset-form").addEventListener("submit", (e)=>{
    
    e.preventDefault();
    
    const auth = getAuth();
    const email = document.getElementById("email");
    const rmessage = document.getElementById("message");
  
    sendPasswordResetEmail(auth, email.value)  

    .then(()=>{
        rmessage.textContent = "Password reset email has been sent";
    })

    .catch((error)=>{
        rmessage.textContent = "error" + error.message;
    });

  });


