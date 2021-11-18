// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkDJiGiTCzjY1pSo6OR4TMJDm9DdtEkb8",
  authDomain: "competencias-4-84765.firebaseapp.com",
  databaseURL: "https://competencias-4-84765-default-rtdb.firebaseio.com",
  projectId: "competencias-4-84765",
  storageBucket: "competencias-4-84765.appspot.com",
  messagingSenderId: "881180405917",
  appId: "1:881180405917:web:2be103b24c51efc20a2474",
  measurementId: "G-YF7LK77ZX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();