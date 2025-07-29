import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdXJBFLPymgMMrLKSxi10mjCwtAvWzOwM",
  authDomain: "chat-app-d3ff3.firebaseapp.com",
  databaseURL: "https://chat-app-d3ff3-default-rtdb.firebaseio.com",
  projectId: "chat-app-d3ff3",
  storageBucket: "chat-app-d3ff3.firebasestorage.googleapis.com",
  messagingSenderId: "755722688662",
  appId: "1:755722688662:web:7bfb5345426cf712cecab7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
