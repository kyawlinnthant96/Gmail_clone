import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFjE978xWg6X-2BQ_AKanULUpsRSWx31A",
  authDomain: "clone-703c3.firebaseapp.com",
  projectId: "clone-703c3",
  storageBucket: "clone-703c3.appspot.com",
  messagingSenderId: "888303905269",
  appId: "1:888303905269:web:eb618534ea2da67359d8bc",
  measurementId: "G-02PQT41EVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
