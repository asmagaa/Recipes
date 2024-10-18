import React from 'react';

function RecipeItem({ recipe, dispatch }) {
  return (
    <div className="recipe-item">
      <h3>{recipe.title}</h3>
      <p>{recipe.content}</p>
      <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', id: recipe.id })}>
        {recipe.isFavorite ? 'Odznacz' : 'Zaznacz'}
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE_RECIPE', id: recipe.id })}>
        usun
      </button>
    </div>
  );
}

export default RecipeItem;