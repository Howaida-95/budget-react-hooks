/* this reducer will include the switch statements in which we'll define 
import ExpenseTransaction from './../components/ExpenseTransaction';
different cases like addIncome or expense or deleted transaction & so on 
==> هنعمل تيست بس عشان نكمل شغل 
this func takes 2 params:
1- state => comes from useReducer() hook 
2- action => it's pure js obj , they have one required property called type 
and also they might have payload property */
export default(state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return{
        ...state, // to avoid changing the entire state for example in add_income case we only need to update incomeTransaction
        incomeTransactions: [action.payload, ...state.incomeTransactions] // holds a newly added incomeTransaction & then we need to spread out the rest of transaction
        }
      case "ADD_Expense":
        return {
          ...state,
          expenseTransactions: [action.payload, ...state.expenseTransactions]
        }
      case "DELETE_TRANSACTION":
        return {
          ...state,
/* look through incomeTransactions and return a filtered array , if the id of transaction 
doesn't equal to the id of payload then this transaction should be capped in the array 
==> if id of incometransaction = id of the payload then this transaction 
should this transaction should be removed from the array and the filtered array should be returned */   
          incomeTransactions: state.incomeTransactions.filter(
            incomeTransaction => incomeTransaction.id !== action.payload
            ),
          expenseTransactions: state.expenseTransactions.filter(
            expenseTransaction => expenseTransaction.id !== action.payload
            )  
        }        
    default: return state;
  }
}
