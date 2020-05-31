import React, {useContext} from 'react';
import { GlobalContext } from './../context/GlobalState';
const IncomeTransaction = ({incomeTransaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  return (
/* consist of 3 parts => 2 span elements for text & amount , one btn for delete  */    
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
      <button className="delete-btn" onClick={deleteTransaction.bind(this,incomeTransaction.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>       
  );
}

export default IncomeTransaction;