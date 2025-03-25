import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from './expenses-slice';

const ExpenseList = () => {
  const expenses = useSelector((state: any) => state.expenses.expenses);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeExpense(id));
  };

  return (
    <div>
      {expenses.map((expense: any) => (
        <div key={expense.id}>
          <p>{expense.name} - {expense.amount} - {expense.category}</p>
          <button onClick={() => handleRemove(expense.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
