import { Link } from "react-router-dom";
import { Buttons } from "../components/Buttons";

const Login = ({loginBtn}) => {
  return (
    <main>
    <article className="App">
      <p>¡Inicia sesión en segundos!</p>
      <Buttons loginBtn={loginBtn} />
      <p>¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </article>
    </main>
  );
}

export default Login;
