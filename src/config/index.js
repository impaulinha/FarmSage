import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPFi8S2s8Hh-cLk08TVK8wQ3bN5ksXKh0",
  authDomain: "farmsage-8b24e.firebaseapp.com",
  projectId: "farmsage-8b24e",
  storageBucket: "farmsage-8b24e.appspot.com",
  messagingSenderId: "900798209017",
  appId: "1:900798209017:web:5798f9e369a9320b90fb28"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase);

export { Firebase, db };