import React, {useContext} from 'react';
import { GlobalContext } from './../context/GlobalState';
import IncomeTransaction from './IncomeTransaction';
const IncomeList = () => {
/* so we need to get access to the income transactions in our state 
because we have to display all the incometransactions in the incomelist */
  const {incomeTransactions} = useContext(GlobalContext);
  return (
    <div className="transactions transactions-income">
      <h2>Income History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => {
          return (
            <IncomeTransaction 
              key={incomeTransaction.id} 
              incomeTransaction={incomeTransaction}/>
          )
        })}
      </ul>
    </div>
  );
}

export default IncomeList;