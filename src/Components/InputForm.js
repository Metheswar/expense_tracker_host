import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onAddExpense }) => {
  const [selectedOption, setSelectedOption] = useState('Expense');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddExpense = () => {
    if (amount.trim() === '' || description.trim() === '') {
      return;
    }

    const expense = {
      id: Math.random().toString(),
      amount: +amount,
      selectedOption,
      description,
    };

    onAddExpense(expense);
    setAmount('');
    setDescription('');
  };

  return (
    <div className="InputContainer">
      <div className="Input">
        <label>Amount: </label>
        <input type="text" value={amount} onChange={handleAmountChange} />

        <label>Description: </label>
        <input type="text" value={description} onChange={handleDescriptionChange} />

        <div className="RadioGroup">
          <label>
            <input
              type="radio"
              value="Expense"
              name="expenseOrIncome"
              checked={selectedOption === 'Expense'}
              onChange={handleOptionChange}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              value="Income"
              name="expenseOrIncome"
              checked={selectedOption === 'Income'}
              onChange={handleOptionChange}
            />
            Income
          </label>
        </div>
        <button onClick={handleAddExpense}>Add</button>
      </div>
    </div>
  );
};

export default InputForm;
