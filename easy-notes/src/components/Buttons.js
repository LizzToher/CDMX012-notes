import emailIcon from "../assets/email-icon.png";
import googleIcon from "../assets/google-icon.png";
import twitterIcon from "../assets/twitter-icon.png";

export const Buttons = ({loginBtn}) => {
  return (
    <>
      <div className="btn-container">
        <img className="icon email" src={emailIcon} alt=""></img>
        <button className="btn email">
          <p className="btn-text">Ingresa sesión con correo electrónico</p>
        </button>
      </div>
      <div className="btn-container">
        <img className="icon google" src={googleIcon} alt=""></img>
        <button className="btn google" onClick={loginBtn}>
          <p className="btn-text">Ingresa sesión con Google</p>
        </button>
      </div>
      <div className="btn-container">
        <img className="icon twitter" src={twitterIcon} alt=""></img>
        <button className="btn twitter">
          <p className="btn-text">Ingresa sesión con Twitter</p>
        </button>
      </div>
    </>
  );
}