import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from './incomes-slice';

const IncomeForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIncome = {
      id: Math.random().toString(36).substring(7),
      name,
      amount: parseFloat(amount),
      category,
    };
    dispatch(addIncome(newIncome));
    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da receita"
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
      <button type="submit">Adicionar Receita</button>
    </form>
  );
};

export default IncomeForm;
