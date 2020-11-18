import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCgLGv-LJpqUWZ0Wfu29_4rbbsEYjrTyTk",
  authDomain: "chatinwith.firebaseapp.com",
  databaseURL: "https://chatinwith.firebaseio.com",
  projectId: "chatinwith",
  storageBucket: "chatinwith.appspot.com",
  messagingSenderId: "1086818545627",
  appId: "1:1086818545627:web:60e9900612408f158281fe",
  measurementId: "G-G1E2QBZETR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;
