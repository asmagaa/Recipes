export const initialState = {
    recipes: [],
    favorites: [],
    searchTerm: '',
    showFavorites: false
  };
  
  export function recipeReducer(state, action) {
    switch (action.type) {
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: [...state.recipes, action.payload]
        };
      case 'REMOVE_RECIPE':
        return {
          ...state,
          recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
        };
      case 'TOGGLE_FAVORITE':
        const isFavorite = state.favorites.includes(action.payload);
        return {
          ...state,
          favorites: isFavorite
            ? state.favorites.filter(id => id !== action.payload)
            : [...state.favorites, action.payload]
        };
      case 'SHOW_FAVORITES':
        return {
          ...state,
          showFavorites: !state.showFavorites
        };
      case 'SEARCH_RECIPES':
        return {
          ...state,
          searchTerm: action.payload
        };
      default:
        return state;
    }
  }