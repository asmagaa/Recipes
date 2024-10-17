import React, { useReducer } from 'react';
import RecipeList from './RecipeList';
import { initialState, recipeReducer } from '../recipeReducer';

function RecipeContainer() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const filteredRecipes = state.showFavorites
    ? state.recipes.filter(recipe => state.favorites.includes(recipe.id))
    : state.recipes;

  return (
    <RecipeList recipes={filteredRecipes} favorites={state.favorites} dispatch={dispatch} />
  );
}

export default RecipeContainer;