//Checks what action is being done. Specifies the applications state changes in response to what action is being done
export default (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}