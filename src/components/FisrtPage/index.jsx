import nukenzie_w from "./img/nukenzie_w.svg";
import homepage from "./img/homepage.png";

import "./style.css";

export const FisrtPage = ({setIniciar}) => {
  return (
    <section id="firstPage">
      <div id="divLeft">
        <img id="logo" src={nukenzie_w} alt="Logo Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <span id="spanFP">de forma rápida e segura</span>
        <button id="buttonFP" onClick={() => setIniciar(true)}>Iniciar</button>
      </div>
      <div id="divRight">
        <img id="homepageImg" src={homepage} alt="Conjunto de formas" />
      </div>
    </section>
  );
};
