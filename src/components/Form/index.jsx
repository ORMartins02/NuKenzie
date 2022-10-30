import { useState } from "react";

import "./style.css";

export const Form = ({ addTransaction }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState(0);
  const [typeInput, setTypeInput] = useState("entrada");

  const getValues = (event) => {
    event.preventDefault();

    if (valueInput === "" || descriptionInput === "") {
      return alert("Preencha os campos corretamente!");
    } else {
      if (typeInput === "saída") {
        return addTransaction(descriptionInput, typeInput, -valueInput);
      } else {
        return addTransaction(descriptionInput, typeInput, valueInput);
      }
    }
  };

  return (
    <form onSubmit={getValues} id="form">
      <label for="inputFormDesc" id="labelFormDesc">
        Descrição:
      </label>
      <input
        name="inputFormDesc"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={descriptionInput}
        onChange={(event) => setDescriptionInput(event.target.value)}
        className="inputForm"
        id="inputFormDesc"
      />
      <div className="divMidle">
        <div id="divFormValue">
          <label for="inputFormValue" id="labelFormValue">
            Valor
          </label>
          <input
            name="inputFormValue"
            type="number"
            placeholder="1"
            min="1"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
            className="inputForm inputFormMidle"
            id="inputFormValue"
          />
        </div>
        <div id="divFormSelect">
          <label for="select" id="labelFormSelect">
            Tipo de valor
          </label>
          <select
            name="select"
            value={typeInput}
            onChange={(event) => setTypeInput(event.target.value)}
            className="inputForm inputFormMidle"
            id="selectInput"
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="inputForm" id="buttonForm">
        Inserir valor
      </button>
    </form>
  );
};
