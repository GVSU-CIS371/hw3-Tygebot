import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5K4Dn0Ui94c1FQCswWRYrqoSbSUuAjcY",
  authDomain: "cis371-37b47.firebaseapp.com",
  projectId: "cis371-37b47",
  storageBucket: "cis371-37b47.firebasestorage.app",
  messagingSenderId: "678819601932",
  appId: "1:678819601932:web:3cf5536306296deaaf5829",
  measurementId: "G-CBVMDKT9T0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
