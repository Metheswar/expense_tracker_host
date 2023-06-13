import React from 'react';
import './Balance.css';

const Balance = ({ balance }) => {
  return (
    <div className="BalanceContainer">
      <h2 className="BalanceText">Balance: ₹{balance}</h2>
    </div>
  );
};

export default Balance;
