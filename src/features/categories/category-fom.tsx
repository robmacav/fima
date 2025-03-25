import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './categories-slice';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategory = {
      id: Math.random().toString(36).substring(7),
      name,
    };
    dispatch(addCategory(newCategory));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Adicionar Categoria</button>
    </form>
  );
};

export default CategoryForm;
