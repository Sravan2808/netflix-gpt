// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcInnJMGN0r9-Cwp1GKAYdxczMSwZTO0w",
  authDomain: "netflixgpt-61df3.firebaseapp.com",
  projectId: "netflixgpt-61df3",
  storageBucket: "netflixgpt-61df3.firebasestorage.app",
  messagingSenderId: "319238488483",
  appId: "1:319238488483:web:9bed7f8171d202a5251a16",
  measurementId: "G-4C89CLLQ78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


