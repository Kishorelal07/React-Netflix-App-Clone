// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBc1PIF6nXmm_toZ0_xEj9OKM58DDrh0k",
  authDomain: "netflixgpt-ed539.firebaseapp.com",
  projectId: "netflixgpt-ed539",
  storageBucket: "netflixgpt-ed539.firebasestorage.app",
  messagingSenderId: "151890651252",
  appId: "1:151890651252:web:1326c69f44ececb0f30921",
  measurementId: "G-XF3BDTV97P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);