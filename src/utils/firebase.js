/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesvb 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
    //   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  apiKey: "AIzaSyAD5q6WfY0p4i1RTmPS114ZS0Tw8YvXpfE",
  authDomain: "eric-s-gpt.firebaseapp.com",
  projectId: "eric-s-gpt",
  storageBucket: "eric-s-gpt.appspot.com",
  messagingSenderId: "350694303254",
  appId: "1:350694303254:web:397d71356bf1742e647737",
  measurementId: "G-CVR5S1B67Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
