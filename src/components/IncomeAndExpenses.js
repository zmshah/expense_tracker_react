import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

//Shows total amounts in income and expenses
export const IncomeAndExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenses = (
    amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);
  return (
  <div>
    <div className="income-expenses-container">
      <div>
        <h4>Income</h4>
        <p className="money add">${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-sub" className="money sub">${expenses}</p>
      </div>
    </div>
  </div>
  )
}
