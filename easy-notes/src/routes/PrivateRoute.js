import Header from "../components/Header";
import logoutIcon from "../assets/logout.png";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import { AddNote } from "../views/AddNote";

const PrivateRoute = ({ user, logoutBtn }) => {
  return (
    <>
      <img src={logoutIcon} className="logout-btn" alt="Cerrar sesión" onClick={logoutBtn}></img>
      <Header input={user.displayName} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default PrivateRoute;
