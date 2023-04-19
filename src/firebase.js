import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASMj0mu2xa41HNUdUKJI6lzTeOgGVAFbI",
  authDomain: "discord-clone-d3b0f.firebaseapp.com",
  projectId: "discord-clone-d3b0f",
  storageBucket: "discord-clone-d3b0f.appspot.com",
  messagingSenderId: "734196090543",
  appId: "1:734196090543:web:ee75cab289677fe00ff65a",
  measurementId: "G-XB383QBL7J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
