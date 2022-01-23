import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyD2I3bCvGzdNTd0QpMrCnrTBwcz5TySAxg",
  authDomain: "jd-notes.firebaseapp.com",
  databaseURL:
    "https://jd-notes-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jd-notes",
  storageBucket: "jd-notes.appspot.com",
  messagingSenderId: "846849312184",
  appId: "1:846849312184:web:f13f4ac2c85d1c629bfb4d",
  measurementId: "G-HMW9C6YC0T",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
