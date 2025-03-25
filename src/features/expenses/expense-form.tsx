import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from './expensesSlice';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random().toString(36).substring(7),
      name,
      amount: parseFloat(amount),
      category,
    };
    dispatch(addExpense(newExpense));
    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da despesa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Adicionar Despesa</button>
    </form>
  );
};

export default ExpenseForm;
