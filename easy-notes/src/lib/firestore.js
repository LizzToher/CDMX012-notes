import { auth } from "./firebase-auth";
import { db } from "./firebase-config";
import { addDoc, collection, orderBy, query, serverTimestamp } from "./firebase-imports";

export const saveNote = async () => {
  const user = auth.currentUser;
  const title = document.querySelector(".text").value;
  const note = document.querySelector(".textarea").value;
  await addDoc(collection(db, "notes"), {
    name: user.displayName,
    uid: user.uid,
    date: serverTimestamp(),
    title,
    note,
  });
};

export const q = query(collection(db, "notes"), orderBy("date", "desc"));