import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
/* grab the data from the localstorage & use it as a value incometransaction property 
*/
const initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem("incomeTransactions")) || [],
  expenseTransactions: JSON.parse(localStorage.getItem("expenseTransactions")) || []
}    
/* const initialState = {
  incomeTransactions: [
    {id: 1, incomeText: "car sold", incomeAmount: 15000},
    {id: 2, incomeText: "Salary", incomeAmount: 5000},
    {id: 3, incomeText: "Bonus", incomeAmount: 13000}
  ],
  expenseTransactions: [
    {id: 4, expenseText: "Rent", expenseAmount: 1000},
    {id: 5, expenseText: "Bank", expenseAmount: 2000},
    {id: 6, expenseText: "Clothes", expenseAmount: 500}    
  ]
}*/
export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
/* in order to send data to localStorage we have to use localStorage.setItem() which takes 2args:
1- the name of collection => it shoulkd be string 
2- the data we want to send to localstorage & it'll be formatted in json
make the same thing for expense */
useEffect(()=> {
  localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions))
})  
useEffect(()=> {
  localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions))
}) 
/* this func will take one param which then will be passed as the value of payload property
it's going to be incomeTransaction.. so now we need to use dispatch func 
and inside () we have to pass an action */
  const addIncome = incomeTransaction => {
    dispatch({
      type: 'ADD_INCOME',
/*payload prop will hold the newly created incomeTransaction (the obj we created in addTransaction component) 
then pass it to the provider */
      payload: incomeTransaction
    })
  }
  const addExpense = expenseTransaction => {
    dispatch({
      type: 'ADD_Expense',
      payload: expenseTransaction
    })
  } 
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  } 
  return (
/* wrap the entire app with that globalContext Provider & this state will be accessible 
from all other components 
=> the provider should have the value property which will include the object 
in which we can pass some data like the state & methods that will dispatch the actions */    
    <GlobalContext.Provider value={{
      incomeTransactions: state.incomeTransactions,
      expenseTransactions: state.expenseTransactions,
      addIncome,
      addExpense,
      deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}