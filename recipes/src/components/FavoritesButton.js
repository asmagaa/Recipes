import React from 'react';

function FavoritesButton({ dispatch }) {
  return (
    <button onClick={() => dispatch({ type: 'SHOW_FAVORITES' })}>
      Pokaż tylko ulubione
    </button>
  );
}

export default FavoritesButton;