import { useNavigate } from "react-router-dom";
import returnBtn from "../assets/return-arrow.png";
import addBtn from "../assets/save-note.png";
import { saveNote } from "../lib/firestore";

export const AddNote = () => {
  const navigate = useNavigate();
  const lastPage = () => {
    navigate(-1);
  };
  const submitNote = () => {
    saveNote();
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
        <input className="input text" type={"text"} placeholder={"Nota 1"} />
        <label className="note">Nota</label>
        <textarea className="input textarea" placeholder={"Escribe aquí tu nota..."} />
        <img src={addBtn} className="addNote-btn" alt="agregar nota" onClick={submitNote}></img>
      </section>
    </main>
  );
};
