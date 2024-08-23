// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDdWskv49LSTy0AHM1oR3r-qsFNKFOBTlo",
    authDomain: "info-6132-lab2-5aa8b.firebaseapp.com",
    projectId: "info-6132-lab2-5aa8b",
    storageBucket: "info-6132-lab2-5aa8b.appspot.com",
    messagingSenderId: "707430927317",
    appId: "1:707430927317:web:3e8db2ae9968b6ff384b5c"
  };
  
  


// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
//export const auth = getAuth(app)