import { useEffect, useState } from "react";
import GetNotes from "./GetNotes";

const Note = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    GetNotes({ setNotes });
  }, []);

  return (
    <article className="notesContainer">
      {notes.map((element) => (
        <section className="noteCard" key={element.id}>
          <h3>{element.title}</h3>
          <p>{element.note}</p>
        </section>
      ))}
    </article>
  );
};
export default Note;
