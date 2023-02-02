import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/expenses/Expenses";
import React,{useState} from 'react';
function App() {
  const DUMMY = [
    {
      id:"2",
      title: "Car Insurence",
      amount: 250,
      date: new Date(2020, 1, 28),
    },

    {
      id:"3",
      title: "Car Insurence",
      amount: 50,
      date: new Date(2020, 1, 28),
    },

    {
      id:"4",
      title: "Car Insurence",
      amount: 80,
      date: new Date(2020, 1, 28),
    },

    {
      id:"5",
      title: "Book",
      amount: 100,
      date: new Date(2020, 1, 2),
    },
  ];
  const[addExpense,setAddExpense] = useState(DUMMY);
  const addExpenseHandler = (e) => {
    setAddExpense((prevExpenses)=>{
      return[e,...prevExpenses];
    }
    )
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={addExpense} />
    </div>
  );
}

export default App;
