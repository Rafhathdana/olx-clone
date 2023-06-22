// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCGhmRIbITcxaMCPisWVuXT1H05NuBUTks",
  authDomain: "olx-clone-rafhathdan.firebaseapp.com",
  projectId: "olx-clone-rafhathdan",
  storageBucket: "olx-clone-rafhathdan.appspot.com",
  messagingSenderId: "151361648828",
  appId: "1:151361648828:web:de3f4165c1e3c68b9bb8b9",
  measurementId: "G-VJ53WRJTB6",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebasedb = getFirestore(app);
export const storage = getStorage(app);
