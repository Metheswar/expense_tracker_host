import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import ExpenseList from "./Components/ExpenseList";
import Balance from "./Components/Balance";
import "./Components/Style.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);

    if (expense.selectedOption === "Income") {
      setBalance((prevBalance) => prevBalance + expense.amount);
    } else if (expense.selectedOption === "Expense") {
      setBalance((prevBalance) => prevBalance - expense.amount);
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Balance className="App" balance={balance} />
      <InputForm onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
