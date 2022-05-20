import { useState } from "react";
import { useNavigate } from "react-router-dom";
import returnBtn from "../assets/return-arrow.png";
import addBtn from "../assets/save-note.png";
import { saveNote } from "../lib/firestore";

export const AddNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();
  const lastPage = () => {
    navigate(-1);
  };
  const submitNote = () => {
    saveNote({ title, note });
    navigate(-1);
  }

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
        <label className="titleNote">Título</label>
        <input className="input text" type={"text"} placeholder={"Nota 1"} onChange={(e) => setTitle(e.target.value)} />
        <label className="note">Nota</label>
        <textarea className="input textarea" placeholder={"Escribe aquí tu nota..."} onChange={(e) => setNote(e.target.value)} />
        <img src={addBtn} className="addNote-btn" alt="agregar nota" onClick={submitNote}></img>
      </section>
    </main>
  );
};
