import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getFirestore,serverTimestamp,getDocs, doc ,collection,addDoc,onSnapshot,query,orderBy} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMHsor9NAqVpys9qiaEXyH8p-h_K4huus",
  authDomain: "signal-clone-62f2e.firebaseapp.com",
  projectId: "signal-clone-62f2e",
  storageBucket: "signal-clone-62f2e.appspot.com",
  messagingSenderId: "216229361406",
  appId: "1:216229361406:web:0364d9bfef769f5132d7af",
};
let app;
if (getApps().length == 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore();
const auth = getAuth();
export { db, auth, createUserWithEmailAndPassword, updateProfile,onAuthStateChanged ,signInWithEmailAndPassword,signOut,collection,addDoc,getDocs,onSnapshot,doc,serverTimestamp,query,orderBy};
