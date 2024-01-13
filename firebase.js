// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCQ9VrTL31LSYaGIRY8w685LqbBU0R1zV4",
  authDomain: "wonen-app.firebaseapp.com",
  projectId: "wonen-app",
  storageBucket: "wonen-app.appspot.com",
  messagingSenderId: "911351712831",
  appId: "1:911351712831:web:a5a9a9c7db974db5bc3c8a",
  measurementId: "G-B12PVZYBPR",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
// const analytics = getAnalytics(firebaseApp);

export { firebaseApp, firebaseAuth };
