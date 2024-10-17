import React from 'react';

function RecipeActions({ recipeId, isFavorite, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: recipeId })}>
        {isFavorite ? 'Usuń' : 'Dodaj'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_RECIPE', payload: recipeId })}>
        Usuń
      </button>
    </div>
  );
}

export default RecipeActions;