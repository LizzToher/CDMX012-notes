import { auth } from "../lib/firebase-auth";
import { onSnapshot } from "../lib/firebase-imports";
import { q } from "../lib/firestore";

const GetNotes = ({ setNotes }) => {
  const user = auth.currentUser;
  onSnapshot(q, (querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data() });
    });
    setNotes(docs.filter((e) => e.uid === user.uid));
  });
};

export default GetNotes;
