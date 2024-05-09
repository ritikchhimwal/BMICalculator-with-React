import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [input ,setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if(!input || !amount) return;

    const newExpense ={
      id: expenses.length+1,
      title: input,
      amount: amount
    };
    setExpenses([...expenses,newExpense]);
    setInput('');
    setAmount('');
  }
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expenses) => expenses.id !== id))
  }
  return (
    <main>
      <h1>Expense Tracker</h1>
      <div className='expense'>
        <input type='text' placeholder='Expense' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <input type='number' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={addExpense}>Add Expenses</button>
      </div>
      <ul className='expense-list'>
        {expenses.map((exp)=>(
          <li key={exp.id}>
            <span>{exp.title}</span>
            <span>{exp.amount}</span>
            <button onClick={()=>deleteExpense(exp.id)}>Delete</button>
          </li>
        )) }
      </ul>
    </main>
  )
}

export default App