// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAibr36_K-96WrUC9d2M5J2cefPw6G-ROo",
  authDomain: "first-project-cae7b.firebaseapp.com",
  projectId: "first-project-cae7b",
  storageBucket: "first-project-cae7b.appspot.com",
  messagingSenderId: "219730678623",
  appId: "1:219730678623:web:d1f7d1e0bc015426145cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);