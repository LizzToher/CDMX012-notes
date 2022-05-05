import { auth } from "./firebase-auth"
import { db } from "./firebase-config";
import { addDoc, collection } from "./firebase-imports";

export const addNote = async (note) => {
    const user = auth.currentUser;
    const date = new Date();
    const docRef = collection(db, "notes");
    await addDoc(collection(db, "notes"), {
        name: user.displayName,
        ID: docRef.id,
        date,
        note,
      });
      console.log("Document written with ID: ", docRef.id);
      
}