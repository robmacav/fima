import React from 'react';
import { useSelector } from 'react-redux';
import IncomeItem from './IncomeItem';

const IncomeList = () => {
  const incomes = useSelector((state: any) => state.incomes.incomes);

  return (
    <div>
      {incomes.length > 0 ? (
        incomes.map((income: any) => (
          <IncomeItem key={income.id} {...income} />
        ))
      ) : (
        <p>Nenhuma receita registrada.</p>
      )}
    </div>
  );
};

export default IncomeList;
