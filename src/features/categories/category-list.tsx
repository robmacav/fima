import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from './category-item';

const CategoryList = () => {
  const categories = useSelector((state: any) => state.categories.categories);

  return (
    <div>
      {categories.length > 0 ? (
        categories.map((category: any) => (
          <CategoryItem key={category.id} {...category} />
        ))
      ) : (
        <p>Nenhuma categoria registrada.</p>
      )}
    </div>
  );
};

export default CategoryList;
