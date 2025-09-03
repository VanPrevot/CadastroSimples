
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGaXH6MXHt3tmsq4YrrnjzS96sm17g3AE",
  authDomain: "training1-19477.firebaseapp.com",
  projectId: "training1-19477",
  storageBucket: "training1-19477.firebasestorage.app",
  messagingSenderId: "1000108767945",
  appId: "1:1000108767945:web:f1ad4624ea7f94002c2b18"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};