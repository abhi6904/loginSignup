// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS95vt6tGBIetgejaBbJIVXWfpNN4TZJs",
  authDomain: "login-signup-firebase-579a9.firebaseapp.com",
  projectId: "login-signup-firebase-579a9",
  storageBucket: "login-signup-firebase-579a9.appspot.com",
  messagingSenderId: "363169140289",
  appId: "1:363169140289:web:1de64871eac72ec9df00c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
