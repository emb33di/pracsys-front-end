import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATMGZg-2j__Br3Nvf1nUUxhodm79H7-lI",
  authDomain: "pracsys-e9f2b.firebaseapp.com",
  projectId: "pracsys-e9f2b",
  storageBucket: "pracsys-e9f2b.firebasestorage.app",
  messagingSenderId: "278045726849",
  appId: "1:278045726849:web:a4e714a7e83521ca891580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
