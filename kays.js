import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";



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


  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.addEventListener("click", ()=>{

    const auth = getAuth();

    signOut(auth).then(()=>{
        alert("Logging out..")
        window.location.href = "index.html";
    })

    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });


  })