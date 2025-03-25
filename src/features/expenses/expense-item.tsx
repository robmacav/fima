import React from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense } from './expensesSlice';

interface ExpenseItemProps {
  id: string;
  name: string;
  amount: number;
  category: string;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ id, name, amount, category }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeExpense(id));
  };

  return (
    <div>
      <p>{name} - {amount} - {category}</p>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default ExpenseItem;
