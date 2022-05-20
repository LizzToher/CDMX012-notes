import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { logInWithGoogle } from "../lib/firebase-auth";
import Login from "../views/Login";
import Register from "../views/Register";

const PublicRoute = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        logInWithGoogle();
        navigate("/")
    }
    return(
        <>
        <Header input='Easy Notes!' />
        <Routes>
            <Route path="/" element={<Login loginBtn={handleOnClick} />} />
            <Route path="/register" element={<Register loginBtn={handleOnClick} />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
        </>
    )
}

export default PublicRoute;