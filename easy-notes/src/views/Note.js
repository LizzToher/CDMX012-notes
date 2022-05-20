import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import returnBtn from "../assets/return-arrow.png";
import deleteNote from "../assets/delete-note.png";
import updateNote from "../assets/update-note.png";
import GetNotes from "../components/GetNotes";
import { DeleteNote } from "../lib/firestore";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  const lastPage = () => {
    navigate(-1);
  };

  const deleteThisNote = () => {
    DeleteNote(id);
    navigate(-1);
  }

  useEffect(() => {
    GetNotes({ setNotes });
  }, []);

  return (
    <main>
      <img
        src={returnBtn}
        className="return-btn"
        alt="Regresar a la página anterior"
        onClick={lastPage}
      ></img>
      {notes
        .filter((note) => note.id === id)
        .map((element) => (
          <>
          <article className="selectedNoteContainer">
            <h2 className="titleText note">{element.title}</h2>
            <p className="noteText note">{element.note}</p>
            <img className="delete-btn" src={deleteNote} alt="Eliminar nota" onClick={deleteThisNote}></img>
            <Link className="update-btn" to={"update"}><img className="update-btn" src={updateNote} alt="Editar nota"></img></Link>
            </article>
          </>
        ))}
    </main>
  );
};

export default Note;
