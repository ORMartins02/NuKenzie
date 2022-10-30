import "./style.css";
import nukenzie_b from "./img/nukenzie_b.svg";

export const Header = ({ setIniciar }) => {
  return (
    <div id="divHeader">
      <img src={nukenzie_b} alt="Logotipo Nu Kenzie" />
      <button
        className="button"
        id="buttonHeader"
        onClick={() => setIniciar(false)}
      >
        Início
      </button>
    </div>
  );
};
