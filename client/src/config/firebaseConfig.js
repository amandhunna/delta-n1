import firebase from "firebase";

const envRef = process.env;

const firebaseConfig = {
  apiKey: envRef.REACT_APP_FIREBASE_API_KEY,
  authDomain: envRef.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: envRef.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: envRef.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envRef.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: envRef.REACT_APP_FIREBASE_APP_ID,
  measurementId: envRef.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const facebookAuth = new firebase.auth.FacebookAuthProvider();

export { db, auth, provider, facebookAuth };
