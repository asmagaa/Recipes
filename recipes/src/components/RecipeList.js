import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, dispatch }) {
  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <RecipeItem key={recipe.id} recipe={recipe} dispatch={dispatch} />
        ))
      ) : (
        <p>Brak.</p>
      )}
    </div>
  );
}

export default RecipeList;