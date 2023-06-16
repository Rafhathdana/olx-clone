// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC_43p8WOqQdK7UieWqe9D2iUfrPchfPg0",
  authDomain: "react-netflix-clone-rafhath.firebaseapp.com",
  projectId: "react-netflix-clone-rafhath",
  storageBucket: "react-netflix-clone-rafhath.appspot.com",
  messagingSenderId: "864676369415",
  appId: "1:864676369415:web:60adea960376a2191ec6a2",
  measurementId: "G-3PKRN9MR7D",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
