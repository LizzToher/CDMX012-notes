// Import the functions you need from the SDKs you need
import { getFirestore, initializeApp } from "./firebase-imports";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5bZ7mxDgw-XtWxKi0PtDnFAlnDNoTPhw",
  authDomain: "easy-notes-c9651.firebaseapp.com",
  projectId: "easy-notes-c9651",
  storageBucket: "easy-notes-c9651.appspot.com",
  messagingSenderId: "456153053483",
  appId: "1:456153053483:web:47dbba9300710922956d6e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
