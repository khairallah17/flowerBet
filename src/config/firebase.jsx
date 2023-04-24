// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyjIT7r1gQzwfk8RSRuemQdMrXV0ryltA",
  authDomain: "betting-we.firebaseapp.com",
  projectId: "betting-we",
  storageBucket: "betting-we.appspot.com",
  messagingSenderId: "684392781916",
  appId: "1:684392781916:web:081dc41342b72a12c8ee99",
  measurementId: "G-XQHG9TJ2D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)