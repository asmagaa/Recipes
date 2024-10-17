import React, { useState } from 'react';

function RecipeForm({ dispatch }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_RECIPE',
      payload: { id: Date.now(), title, content }
    });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tytuł przepisu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Treść przepisu"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Dodaj przepis</button>
    </form>
  );
}

export default RecipeForm;