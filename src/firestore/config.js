import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQfgZMAZtW3oB6p6kUltNagPUfNkz0Oxs",
  authDomain: "react-26-usqueda.firebaseapp.com",
  projectId: "react-26-usqueda",
  storageBucket: "react-26-usqueda.firebasestorage.app",
  messagingSenderId: "60981525615",
  appId: "1:60981525615:web:fff53e6bb9a5059a92219a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)