import React, { useState } from "react";
import "./Expenses.css";
import Expenseitems from "./Expenseitems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const filteredDate = (selectedyear) => {
    setYear(selectedyear);
  };
  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === year;
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter sy={year} onDate={filteredDate} />
      <ExpensesChart expenses = {filteredExpense}/>
      {filteredExpense.length === 0 && <p>No Expenses Found</p>}
      {filteredExpense.length > 0 && filteredExpense.map((expense) => (
        <Expenseitems
        key = {expense.id}
          title={expense.title}
          amount= {expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};
export default Expenses;
