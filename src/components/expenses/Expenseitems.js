import React from 'react'
import Card from '../UI/Card';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';

const Expenseitems =(props)=> {
 
 
  return (
   
      
    <Card className='expense-item'>
    
     <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
    </Card>
    
  );
};

export default Expenseitems;
