import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

//Functional component which calculates the current balance
export const CurrentBalance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className='balance'>
            <h2>Current Balance: ${total}</h2>            
        </div>
    )
}

//const CurrentBalance = function() {}

/*import React, {Component} from 'react';

export class CurrentBalance extends Component {
    render() {
        return (
            <div>
                <h4>Current Balance</h4>
                <h1>$0.00</h1>
            </div>
        )
    }
}*/
