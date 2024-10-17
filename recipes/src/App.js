import React, { useReducer } from 'react';
import { initialState, recipeReducer } from './recipeReducer';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesButton from './components/FavoritesButton';

function App() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <div>
      <h1>przepisy</h1>
      <SearchBar dispatch={dispatch} />
      <RecipeForm dispatch={dispatch} />
      <FavoritesButton dispatch={dispatch} />
      <RecipeList recipes={state.recipes} favorites={state.favorites} dispatch={dispatch} />
    </div>
  );
}

export default App;