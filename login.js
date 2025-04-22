import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import{GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js"; 



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

const submit = document.getElementById("submit");

submit.addEventListener("click", (e)=> {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value; 
    const password = document.getElementById("loginPassword").value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
        alert("logging in...");
        window.location.href = "kays.html";
    })

    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = "Invalid Email or Password";
        alert(errorMessage);
    });
})


const googlebtn = document.getElementById("googlebtn2");

googlebtn.addEventListener("click", ()=>{

  const auth = getAuth();

signInWithPopup(auth, provider)

  .then((result) => {

    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    
    const user = result.user;

    window.location.href = "kays.html";

  }).catch((error) => {
    const errorCode = error.code;

    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);

    console.log("error");
  })
})


const password = document.getElementById("loginPassword");
const visbtn = document.getElementById("visibtn2");

password.addEventListener("focus", ()=>{
  visbtn.style.opacity = "100%";
  visbtn.style.visibility = "visible";
})

password.addEventListener("blur", ()=>{
  visbtn.style.opacity = "0%";
  visbtn.style.visibility = "hidden";
})




visbtn.addEventListener("click", ()=>{

  var passField = document.getElementById("loginPassword");

  passField.type = passField.type === "password" ? "text": "password";
})



