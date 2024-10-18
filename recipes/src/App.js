import React, { useReducer, useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { recipeReducer, initialState } from './components/RecipeReducer';
import './App.css';


function App() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = state.recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!showFavorites || recipe.isFavorite)
  );

  return (
    <div className="app">
      <h1>Przepisy</h1>
      <RecipeForm dispatch={dispatch}/>
      <input 
        type="text" 
        placeholder="Wyszukaj..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'Wszystko' : 'Ulubione'}
      </button>
      <RecipeList recipes={filteredRecipes} dispatch={dispatch} />
    </div>
  );
}

export default App;