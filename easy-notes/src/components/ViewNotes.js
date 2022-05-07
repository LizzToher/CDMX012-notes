import { useEffect, useState } from "react";
import GetNotes from "./GetNotes";

const Note = () => {
const [notes, setNotes] = useState([]);

useEffect(() => {
    GetNotes({setNotes});
}, []);

return (
    <article className="notesContainer">
        {notes.map((element) => (
                    <section className="everyNoteContainer" key={element.id}>
                <h3 key={element.title}>{element.title}</h3>
                <p key={element.uid}>{element.note}</p>
            </section>)
        )}
    </article>       
)}
export default Note;