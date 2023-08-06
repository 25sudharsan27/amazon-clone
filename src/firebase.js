import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {initializeApp} from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ni55eja6Btmb_AnYj604GlaNN25V8NE",
  authDomain: "clone-sudharsan.firebaseapp.com",
  projectId: "clone-sudharsan",
  storageBucket: "clone-sudharsan.appspot.com",
  messagingSenderId: "1028606608695",
  appId: "1:1028606608695:web:b5dc44be0dda53dace86b2",
  measurementId: "G-GTFWWTWV18"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();


export {db,auth};