import { useState } from 'react';

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
