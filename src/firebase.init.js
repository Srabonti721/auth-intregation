// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-F2zZeKinmxdlhsasiHBMwwUeXTHnb2c",
  authDomain: "auth-integration-169f8.firebaseapp.com",
  projectId: "auth-integration-169f8",
  storageBucket: "auth-integration-169f8.firebasestorage.app",
  messagingSenderId: "186083662585",
  appId: "1:186083662585:web:56f50ca53d4ac7b5a26028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);