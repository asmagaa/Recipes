import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, favorites, dispatch }) {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.includes(recipe.id)}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default RecipeList;