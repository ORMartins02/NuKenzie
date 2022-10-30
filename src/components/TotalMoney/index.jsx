import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce((acc, act) => {
    return acc + act.value;
  }, 0);

  return (
    <div id="divTotalMoney">
      <div id="totalValue">
        <h3 id="titleValue">Valor total:</h3>
        <span id="spanValue">$ {totalValue}</span>
      </div>
      <p id="textValue">O valor se refere ao saldo</p>
    </div>
  );
};
