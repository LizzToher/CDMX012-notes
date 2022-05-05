import logo from "../assets/logo.png";

function Header({ input }) {
  return (
    <header className="App-header">
      <img
        className="logo"
        src={logo}
        alt="logo de Easy notes!, lápiz amarillo anotando un signo de exclamación fucsia en un post it blanco."
      ></img>
      <h1 className="title">{input}</h1>
    </header>
  );
}

export default Header;
