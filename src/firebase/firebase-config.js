import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1QiyUHYooj2rEm4eJZd7Srf5EZ-2gFgw",
  authDomain: "journal-app-1053c.firebaseapp.com",
  databaseURL: "https://journal-app-1053c-default-rtdb.firebaseio.com",
  projectId: "journal-app-1053c",
  storageBucket: "journal-app-1053c.appspot.com",
  messagingSenderId: "498775728954",
  appId: "1:498775728954:web:2154f16a2de206df6a6603",
  measurementId: "G-6ZHL4JPQWF"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}