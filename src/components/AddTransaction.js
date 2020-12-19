//imports the useState hook
import React, {useState, useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';

//Functional component to add new transaction
/*export const AddTransaction = () => {
    const [incomeText, setIncomeText] = useState('');
    const [expenseText, setExpenseText] = useState('');
    const [incomeAmount, setIncomeAmount] = useState(0);
    const [expenseAmount, setExpenseAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmitIncome = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            incomeText,
            incomeAmount: +incomeAmount,
        } 
        addTransaction(newTransaction);
    }
    const onSubmitExpense = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            expenseText,
            expenseAmount: +expenseAmount,
        } 
        addTransaction(newTransaction);
    }
    return (
        <div className='addTransaction'>
            <h3>Add Transaction</h3>
            <form onSubmit ={onSubmitIncome}>
                <div className="form-control">
                    <label htmlFor="text">Income Transaction Entry</label>
                    <input type="text" value={incomeText} onChange={(e) => setIncomeText(e.target.value)} placeholder="Transaction..." />
                </div>
                <div className="form-control">
                    <label htmlFor="number">
                        Enter a value for income
                    </label>
                    <input type="number" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} placeholder="Enter income..." />
                </div>
                <button className="btn">Add income</button>
            </form>
            <form onSubmit ={onSubmitExpense}>
                <div className="form-control">
                    <label htmlFor="text">Expense Transaction Entry</label>
                    <input type="text" value={expenseText} onChange={(e) => setExpenseText(e.target.value)} placeholder="Transaction..." />
                </div>
                <div className="form-control">
                    <label htmlFor="number">
                        Enter a value for expense
                    </label>
                    <input type="number" value={-Math.abs(expenseAmount)} onChange={(e) => setExpenseAmount(e.target.value)} placeholder="Enter expense..." />
                </div>
                <button className="btn">Add expense</button>
            </form>
        </div>
    )*/
    
    
    export const AddTransaction = () => {
        const [text, setText] = useState('');
        const [amount, setAmount] = useState(0);
        const {addTransaction} = useContext(GlobalContext);
        const onSubmit = e => {
            e.preventDefault();
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount,
            } 
            addTransaction(newTransaction);
        }
        return (
            <div className='addTransaction'>
                <h3>Add Transaction</h3>
                <form onSubmit ={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Transaction Entry</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="number">
                            Enter a positive value for income and negative value for expense
                        </label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter income..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        )
    
}

  