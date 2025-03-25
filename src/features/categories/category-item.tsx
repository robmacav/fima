import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCategory } from './categories-slice';

interface CategoryItemProps {
  id: string;
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCategory(id));
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default CategoryItem;
