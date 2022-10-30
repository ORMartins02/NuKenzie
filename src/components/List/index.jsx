import { Card } from "../Card";

import "./style.css";

export const List = ({
  listTransactions,
  filterListTransaction,
  setFilterListTransaction,
  deleteTransaction,
  filterTransactions,
}) => {
  return (
    <>
      <section id="sectionHeader">
        <div>
          <h3>Resumo financeiro</h3>
        </div>
        <div>
          <button
            id="buttonSectionTodos"
            className="button"
            onClick={() => setFilterListTransaction(listTransactions)}
          >
            Todos
          </button>
          <button
            id="buttonSectionEntradas"
            className="button"
            onClick={() => {
              filterTransactions("entrada");
            }}
          >
            Entradas
          </button>
          <button
            id="buttonSectionDespesas"
            className="button"
            onClick={() => {
              filterTransactions("saída");
            }}
          >
            Saídas
          </button>
        </div>
      </section>

      <ul id="listContainer">
        {filterListTransaction.map((elem, index) => {
          return filterListTransaction.length > 0 ? (
            <li id="listCard">
              <Card
                key={index}
                id={index}
                description={elem.description}
                value={elem.value}
                handleTransaction={deleteTransaction}
                elem={elem}
              />
              <span id="spanType">{elem.type}</span>
            </li>
          ) : (
            <h3 key="1">Não possui nenhum lançamento</h3>
          );
        })}
      </ul>
    </>
  );
};
