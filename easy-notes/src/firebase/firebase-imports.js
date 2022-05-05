/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
export { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
export { getFirestore, collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, updateDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';