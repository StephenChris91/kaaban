// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2F4T5qhrCCrZvTNAx_xr026OxKYt-cs4",
  authDomain: "kanban-b38fa.firebaseapp.com",
  projectId: "kanban-b38fa",
  storageBucket: "kanban-b38fa.appspot.com",
  messagingSenderId: "628998533725",
  appId: "1:628998533725:web:27e2735a558538127c93b4",
  measurementId: "G-8RNQ0CSQKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

