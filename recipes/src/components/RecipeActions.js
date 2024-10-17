import React from 'react';

function RecipeActions({ recipeId, isFavorite, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: recipeId })}>
        {isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_RECIPE', payload: recipeId })}>
        Usuń przepis
      </button>
    </div>
  );
}

export default RecipeActions;