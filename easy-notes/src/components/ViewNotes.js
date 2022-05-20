import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetNotes from "./GetNotes";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    GetNotes({ setNotes });
  }, []);

  return (
    <article className="notesContainer">
      {notes.map((element) => (
        <section className="noteCard" key={element.id}>
          <Link to={"" + element.id}>
            <h3 className="titleText notes">{element.title}</h3>
            <p className="noteText notes">{element.note}</p>
          </Link>
        </section>
      ))}
    </article>
  );
};
export default ViewNotes;
