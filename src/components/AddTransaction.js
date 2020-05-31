import React, {useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from './../context/GlobalState';
const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
/* ------------------------- for income -------------------------- */  

// create a new state which will be the local state for this component 
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0
  })
  const {incomeText, incomeAmount} = income; // destructuring the prop
/* grab the values from the input fields 
grab the inpcometext from the first input 
grab the inpcomeamount from the second input .. for that we have to use onChange event 
==> in order to get the values from the input fields, i'm going to use the following technique :
event object hasproperty called target , it gives us the element on which the event is fired 
in this case it's going to be the input element , so to access to the needed input we can use the name prop 
and the name attr should match the name of property of the income object */
  const onChangeIncomne = e => {
    setIncome({...income,[e.target.name]: e.target.value})// used brackets notation because we can access to the exact prop name with the help of it 
  }
  const onSubmitIncome = e => {
    e.preventDefault();// stop the default action of reloading page when clicking on submit btn
/* we'll create a new obj which will include the text & amount values that we enter on input fields 
then we'll dispatch this obj into global state 
each transaction has a unique id by using uuid packages */
    if(incomeText !== ""){
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText, // if the value & property are athe same write it once 
        incomeAmount: parseFloat(incomeAmount)// convert from string into number 
      }  
/* the next thing that we have to do is to create a func that will dispatch the action to the reducer 
so that the newly created obj will be added to the state */
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: "",
        incomeAmount: 0
      })
    }
  }

/* ------------------------- for expense -------------------------- */  

const [expense, setExpense] = useState({
  expenseText: '',
  expenseAmount: 0
})
const {expenseText, expenseAmount} = expense; 
const onChangeExpense = e => {
  setExpense({...expense,[e.target.name]: e.target.value})
}
const onSubmitExpense = e => {
  e.preventDefault();
  if(expenseText !== ""){
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText, 
      expenseAmount: parseFloat(expenseAmount)
    }  
    addExpense(newExpenseTransaction);
    setExpense({
      expenseText: "",
      expenseAmount: 0
    })
  }
}  

  return (
    <div className="form-wrapper">
{/* form for the income */}
      <form onSubmit = {onSubmitIncome}>
        <div className="input-group income">
          <input 
            type="text"
            name = "incomeText"
            value = {incomeText}
            placeholder="Add Income..." 
            autoComplete="off" 
            onChange={onChangeIncomne}/>{/* this allow us to hide previously entered values in input field */}
          <input 
            type = "number" 
            value = {incomeAmount}
            step = "any"// the default is 1 now irt allows decimal nums
            name = "incomeAmount"
            placeholder="Amount" 
            autoComplete="off" 
            onChange={onChangeIncomne}/>
          <input type="submit" value="Submit"/>
        </div>
      </form>

{/* form for the expense */}
      <form onSubmit = { onSubmitExpense }>
        <div className="input-group expense">
          <input 
            type = "text" 
            name = "expenseText"
            value = {expenseText}            
            placeholder = "Add Expense..." 
            autoComplete = "off"
            onChange = {onChangeExpense}/>{/* this allow us to hide previously entered values in input field */}
          <input 
            type = "number" 
            name = "expenseAmount"
            value = {expenseAmount}
            step = "any"// the default is 1 now irt allows decimal nums
            placeholder = "Amount" 
            autoComplete = "off"
            onChange = {onChangeExpense}/>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;