import { Buttons } from "../components/Buttons";

const Register = ({loginBtn}) => {
  return (
      <main>
      <article className="App">
        <p>Necesitas iniciar sesión para acceder a esta sección</p>
        <Buttons loginBtn={loginBtn} />
      </article>
    </main>
  );
}

export default Register;
