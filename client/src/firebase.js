// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d8e56.firebaseapp.com",
  projectId: "mern-auth-d8e56",
  storageBucket: "mern-auth-d8e56.appspot.com",
  messagingSenderId: "250180157792",
  appId: "1:250180157792:web:f8b2fdde29bb76f091de05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);