import React from 'react';

function FavoritesButton({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: 'SHOW_FAVORITES' })}>
      Zapisane
    </button>
  );
}

export default FavoritesButton;