// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPaSrMuoHIqElzWK4541mUQOGcwwDChIo",
  authDomain: "vibewabe.firebaseapp.com",
  projectId: "vibewabe",
  storageBucket: "vibewabe.appspot.com",
  messagingSenderId: "748660968474",
  appId: "1:748660968474:web:a7c43f33c9947bd6bed5a3"


  // apiKey:process.env.FIREBASE_apiKey,
  // authDomain: process.env.FIREBASE_authDomain,
  // projectId: process.env.FIREBASE_projectId,
  // storageBucket: process.env.FIREBASE_storageBucket,
  // messagingSenderId: process.env.FIREBASE_messagingSenderId,
  // appId: process.env.FIREBASE_appId

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)