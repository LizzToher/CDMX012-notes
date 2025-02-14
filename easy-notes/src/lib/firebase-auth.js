/* eslint-disable no-unused-vars */
import { app } from "./firebase-config";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "./firebase-imports";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const logInWithGoogle = () => {
 signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const logout = () => {
    signOut(auth)
    .then(() => {
        console.log('Vuelvas prontos! :D');
    }).catch((error) => {
        console.log('Ha ocurrido un error, inténtalo más tarde');
    });
}