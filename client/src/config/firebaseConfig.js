import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgtBjJ8GCVMILNMVQwJBmE428DhjJCjCM",
  authDomain: "littletags-fa858.firebaseapp.com",
  projectId: "littletags-fa858",
  storageBucket: "littletags-fa858.appspot.com",
  messagingSenderId: "770896593247",
  appId: "1:770896593247:web:f6560192cd373c7ea5f6ea",
  measurementId: "G-G6TN79B0L7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const facebookAuth = new firebase.auth.FacebookAuthProvider();

export { db, auth, provider, facebookAuth };
