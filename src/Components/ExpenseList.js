import React from 'react';
import './ExpenseList.css';

const TotalIncome = ({ income }) => {
  return (
    <div className="TotalContainer IncomeContainer">
      <h3>Total Income</h3>
      <p className="TotalAmount IncomeAmount">₹{income}</p>
    </div>
  );
};

const TotalExpenses = ({ expenses }) => {
  return (
    <div className="TotalContainer ExpenseContainer">
      <h3>Total Expenses</h3>
      <p className="TotalAmount ExpenseAmount">₹{expenses}</p>
    </div>
  );
};

const ExpenseList = ({ expenses }) => {
  const incomeExpenses = expenses.reduce(
    (acc, expense) => {
      if (expense.selectedOption === 'Income') {
        acc.income += expense.amount;
      } else if (expense.selectedOption === 'Expense') {
        acc.expenses += expense.amount;
      }
      return acc;
    },
    { income: 0, expenses: 0 }
  );

  return (
    <div className="ExpenseListContainer">
      <h2>Expenses:</h2>
      <div className="SummaryContainer">
        <TotalIncome income={incomeExpenses.income} />
        <TotalExpenses expenses={incomeExpenses.expenses} />
      </div>
      <table className="ExpenseTable">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Expense/Income</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td
                className={`AmountCell ${expense.selectedOption === 'Expense' ? 'Expense' : 'Income'}`}
              >
                ₹{expense.amount}
              </td>
              <td>{expense.description}</td>
              <td>{expense.selectedOption === 'Expense' ? 'Expense' : 'Income'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default ExpenseList;
