import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer'

//Initial state
const allTransactions = {
    transactions: JSON.parse(localStorage.getItem("transactions")) || []
};

//Create Context to use createContext
export const GlobalContext = createContext(allTransactions);

//Provider component (for other components to have access to the globalsate)
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, allTransactions);

    useEffect(() => {
        localStorage.setItem(
          "transactions",
          JSON.stringify(state.transactions)
        );
      });

    //Actions including add and delete. Makes calls to the reducer
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    } 

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction,
        deleteTransaction}}>
            {children}
    </GlobalContext.Provider>);
}
