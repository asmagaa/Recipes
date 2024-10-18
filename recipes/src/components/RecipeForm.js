import React, { useState } from 'react';

function RecipeForm({ dispatch }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch({
        type: 'ADD_RECIPE',
        recipe: { title, content }
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Tytuł" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Składniki" 
        value={content} 
        onChange={e => setContent(e.target.value)} 
      />
      <button type="submit">Dodaj przepis</button>
    </form>
  );
}

export default RecipeForm;