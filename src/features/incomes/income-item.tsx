import React from 'react';
import { useDispatch } from 'react-redux';
import { removeIncome } from './incomes-slice';

interface IncomeItemProps {
  id: string;
  name: string;
  amount: number;
  category: string;
}

const IncomeItem: React.FC<IncomeItemProps> = ({ id, name, amount, category }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeIncome(id));
  };

  return (
    <div>
      <p>{name} - {amount} - {category}</p>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default IncomeItem;
