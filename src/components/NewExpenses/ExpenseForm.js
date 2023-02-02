import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    const expensess = {
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
    };
    props.onSaveExpense(expensess);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value  = {enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value = {enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={handleDateChange}
            value = {enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button  type = "button" onClick = {props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
