// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD_IbEw6FKgeHKSFexdb-sliwkquMUomps",
  authDomain: "flashdb-1ab22.firebaseapp.com",
  projectId: "flashdb-1ab22",
  storageBucket: "flashdb-1ab22.appspot.com",
  messagingSenderId: "223917305959",
  appId: "1:223917305959:web:47d8f2dd23c34f91c9e4c2",
  measurementId: "G-R2TT2WPRZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);