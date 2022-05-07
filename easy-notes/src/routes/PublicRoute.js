import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { logInWithGoogle } from "../lib/firebase-auth";
import Login from "../views/Login";
import Register from "../views/Register";

const PublicRoute = () => {
    return(
        <>
        <Header input='Easy Notes!' />
        <Routes>
            <Route path="/" element={<Login loginBtn={logInWithGoogle} />} />
            <Route path="/register" element={<Register loginBtn={logInWithGoogle} />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
        </>
    )
}

export default PublicRoute;