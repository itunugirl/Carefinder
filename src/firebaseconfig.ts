import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { isSupported, getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1-cywD2Y2BwUEePRSCwqkJD8bk9CWCg0",
  authDomain: "medease-408ff.firebaseapp.com",
  projectId: "medease-408ff",
  storageBucket: "medease-408ff.appspot.com",
  messagingSenderId: "479510684902",
  appId: "1:479510684902:web:a4403885ce36c1ead80727",
  measurementId: "G-0W9NXVPGJ6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
