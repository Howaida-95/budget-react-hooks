import React, {useContext} from 'react';
import { GlobalContext } from './../context/GlobalState';
const ExpenseTransaction = ({expenseTransaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  return (
/* consist of 3 parts => 2 span elements for text & amount , one btn for delete  */    
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
      <button className="delete-btn" onClick={deleteTransaction.bind(this, expenseTransaction.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>       
  );
}

export default ExpenseTransaction;