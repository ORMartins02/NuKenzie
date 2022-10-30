import { TotalMoney } from "./components/TotalMoney";
import { FisrtPage } from "./components/FisrtPage";
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { List } from "./components/List";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [filterListTransaction, setFilterListTransaction] =
    useState(listTransactions);

  const [iniciar, setIniciar] = useState(false);

  useEffect(() => {
    setFilterListTransaction(listTransactions);
  }, [listTransactions]);

  const addTransaction = (description, type, value) => {
    value = parseInt(value);
    let newTransaction = { description, type, value };
    return setListTransactions([...listTransactions, newTransaction]);
  };

  const deleteTransaction = (deleted) => {
    setListTransactions(listTransactions);
    return setListTransactions((filteredTransaction) =>
      filteredTransaction.filter((transation) => transation !== deleted)
    );
  };

  const filterTransactions = (filterName) => {
    setFilterListTransaction((filteredTransaction) =>
      filteredTransaction.filter((transation) => transation.type === filterName)
    );
  };

  return (
    <div className="App">
      {!iniciar ? (
        <FisrtPage setIniciar={setIniciar} />
      ) : (
        <>
          <header className="App-header">
            <Header setIniciar={setIniciar} />
          </header>
          <main className="App-main">
            <section className="sectionMain">
              <Form addTransaction={addTransaction} />
              <TotalMoney listTransactions={listTransactions} />
            </section>
            <section className="asideMain">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                filterListTransaction={filterListTransaction}
                setFilterListTransaction={setFilterListTransaction}
                deleteTransaction={deleteTransaction}
                filterTransactions={filterTransactions}
              />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
