// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0FpGBgamS851Z2i_iNOFeCcYLWS7VejA",
  authDomain: "affinia-dev.firebaseapp.com",
  projectId: "affinia-dev",
  storageBucket: "affinia-dev.firebasestorage.app",
  messagingSenderId: "213786369912",
  appId: "1:213786369912:web:ae425ca6806375a2a0f28d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);