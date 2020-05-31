
import React, {useContext} from 'react';
import { GlobalContext } from './../context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction';
const ExpenseList = () => {
/* so we need to get access to the Expense transactions in our state 
because we have to display all the Expensetransactions in the Expenselist */
  const {expenseTransactions} = useContext(GlobalContext);
  console.log(expenseTransactions);
  return (
    <div className="transactions transactions-expense">
      <h2>Expense History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => {
          return (
            <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>
          )
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;

