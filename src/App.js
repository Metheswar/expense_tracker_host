import React, { useState, useEffect } from 'react';
import InputForm from './Components/InputForm';
import ExpenseList from './Components/ExpenseList';
import Balance from './Components/Balance';
import './Components/Style.css';

const App = () => {
 
  const [balance, setBalance] = useState(
    JSON.parse(localStorage.getItem('balance')) || 0
  );
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) || []
  );
  const [totalExpenses, setTotalExpenses] = useState(
    JSON.parse(localStorage.getItem('totalExpenses')) || 0
  );
  const [totalIncome, setTotalIncome] = useState(
    JSON.parse(localStorage.getItem('totalIncome')) || 0
  );
  
  
  useEffect(() => {
    // Retrieve data from local storage on page load
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    const storedBalance = JSON.parse(localStorage.getItem('balance'));
    const storedTotalExpenses = JSON.parse(localStorage.getItem('totalExpenses'));
    const storedTotalIncome = JSON.parse(localStorage.getItem('totalIncome'));

    // Set the retrieved values to state variables
    if (storedExpenses) setExpenses(storedExpenses);
    if (storedBalance) setBalance(storedBalance);
    if (storedTotalExpenses) setTotalExpenses(storedTotalExpenses);
    if (storedTotalIncome) setTotalIncome(storedTotalIncome);
  }, []);

  useEffect(() => {
    // Store data in local storage whenever there are changes to expenses, balance, totalExpenses, or totalIncome
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('balance', JSON.stringify(balance));
    localStorage.setItem('totalExpenses', JSON.stringify(totalExpenses));
    localStorage.setItem('totalIncome', JSON.stringify(totalIncome));
  }, [expenses, balance, totalExpenses, totalIncome]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);

    if (expense.selectedOption === 'Income') {
      setBalance((prevBalance) => prevBalance + expense.amount);
    } else if (expense.selectedOption === 'Expense') {
      setBalance((prevBalance) => prevBalance - expense.amount);
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Balance balance={balance} />
      <InputForm onAddExpense={addExpenseHandler} />
      <ExpenseList
        expenses={expenses}
        setTotalExpenses={setTotalExpenses}
        totalExpenses={totalExpenses}
        setTotalIncome={setTotalIncome}
        totalIncome={totalIncome}
      />
    </div>
  );
};

export default App