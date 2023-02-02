import React,{useState} from 'react'

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses=(props)=> {
    const handleSaveExpense = enteredExpenseData=>{
        const Expensedata = {
...enteredExpenseData,
id:Math.random().toString(),
        };
        props.onAddExpense(Expensedata);
    }
    const[open,setOpen] = useState(false);
    const openForm = ()=>{
setOpen(true);
    }
    const handleCancel =()=>{
    setOpen(false);
    }
  return (
    <div className='new-expense'>

     {!open && <button type = "button" onClick={openForm}>Add New Expenses</button>}
     {open && <ExpenseForm cancel = {handleCancel} onSaveExpense = {handleSaveExpense}/>}
    </div>
  );
}
export default NewExpenses;
