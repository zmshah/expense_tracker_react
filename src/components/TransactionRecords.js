import React, {useContext} from 'react'
import {Transaction} from './Transaction';
import {GlobalContext} from '../context/GlobalState';

//Functional component with list of transactions
export const Transactions = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className='transactionRecords'>
            <h3>Transactions</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}                
            </ul>
        </div>
    )
}
