// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.FB_PROJECT_ID,
  storageBucket: import.meta.env.FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.FB_API_ID,
};
//
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
//
// 꼭 이렇게 해야하는 건 아니니까 편한대로 해당 스크립트에서 import해서 사용해도 된다
export {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
