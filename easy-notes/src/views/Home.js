import { useNavigate } from "react-router-dom";
import addBtn from "../assets/add-note.png";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/add');
  }
  return (
      <main className="dashboard">
        <h2>Mis notas</h2>
        <img src={addBtn} className="add-btn" alt="Agregar nota" onClick={handleOnClick}></img>
      </main>
  );
}

export default Home;
