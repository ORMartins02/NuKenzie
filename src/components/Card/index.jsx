import { FaTrash } from "react-icons/fa";

import "./style.css";

export const Card = ({ description, value, handleTransaction, elem }) => {
  return (
    <>
      <div id="listTitle">
        <h3>{description}</h3>
        <div>
          <span id="spanValue">R$ {value},00</span>
          <button
            id="buttonList"
            className="button"
            onClick={() => {
              handleTransaction(elem);
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};
