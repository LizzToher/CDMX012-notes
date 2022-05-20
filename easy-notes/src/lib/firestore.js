import { auth } from "./firebase-auth";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "./firebase-imports";

export const saveNote = async ({ title, note }) => {
  const user = auth.currentUser;
  await addDoc(collection(db, "notes"), {
    name: user.displayName,
    uid: user.uid,
    date: serverTimestamp(),
    title,
    note,
  });
};

export const q = query(collection(db, "notes"), orderBy("date", "desc"));

export const DeleteNote = (id) => deleteDoc(doc(db, "notes", id));

export const updateNote = async ({id, newTitle, newNote}) => {
  await updateDoc(doc(db, 'notes', id), {
    date: serverTimestamp(),
    title: newTitle,
    note: newNote,
  });
}