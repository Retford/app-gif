import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onNewCategory = (newCategory) => {
    if (
      categories
        .toString()
        .toLocaleLowerCase()
        .includes(newCategory.toLocaleLowerCase())
    ) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onNewCategory} />

      {categories.length !== 0 ? (
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      ) : (
        <h3 className='start-result'>Ingresa un valor para mostrar</h3>
      )}
    </>
  );
}
