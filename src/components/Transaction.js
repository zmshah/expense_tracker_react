import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

//Functional component that tracks wether transaction is an expense or an income and also deletes transactions
export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.amount < 0 ? 'sub' : 'add'}>
                {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)}className="delete-btn">x</button>
            </li>
        </div>
    )
}
