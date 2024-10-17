import React from 'react';
import RecipeActions from './RecipeActions';

function RecipeItem({ recipe, isFavorite, dispatch }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.content}</p>
      <RecipeActions recipeId={recipe.id} isFavorite={isFavorite} dispatch={dispatch} />
    </div>
  );
}

export default RecipeItem;