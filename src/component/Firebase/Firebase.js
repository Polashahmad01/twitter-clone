import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHnxRflPqjAa-aNFA4Q23UvvTjc3FH_T4",
    authDomain: "twitter-clone-69d69.firebaseapp.com",
    projectId: "twitter-clone-69d69",
    storageBucket: "twitter-clone-69d69.appspot.com",
    messagingSenderId: "38761091756",
    appId: "1:38761091756:web:537bf30010460eb3974509",
    measurementId: "G-N1VZ52XEWX"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;