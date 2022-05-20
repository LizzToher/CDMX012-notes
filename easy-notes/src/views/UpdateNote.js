import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import returnBtn from "../assets/return-arrow.png";
import addBtn from "../assets/save-note.png";
import GetNotes from "../components/GetNotes";
import { updateNote } from "../lib/firestore";

const UpdateNote = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();
  const lastPage = () => {
    navigate(-1);
  };
  const update = () => {
    updateNote({ id, newTitle, newNote });
    navigate(-2);
  };

  useEffect(() => {
    GetNotes({ setNotes });
  }, []);

  return (
    <main className="Add-Section">
      <img
        src={returnBtn}
        className="return-btn"
        alt="Regresar a la página anterior"
        onClick={lastPage}
      ></img>
      <h2 className="addTitle">Agregar nota</h2>
      <section className="Add-Container">
        {notes
          .filter((note) => note.id === id)
          .map((element) => (
            <>
              <label className="titleNote">Título</label>
              <input
                className="input text"
                type={"text"}
                placeholder={element.title}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <label className="note">Nota</label>
              <textarea
                className="input textarea"
                placeholder={element.note}
                onChange={(e) => setNewNote(e.target.value)}
              />
              <img
                src={addBtn}
                className="addNote-btn"
                alt="agregar nota"
                onClick={update}
              ></img>
            </>
          ))}
      </section>
    </main>
  );
};

export default UpdateNote;
