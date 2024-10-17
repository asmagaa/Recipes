import React, { useState } from 'react';

function SearchBar({ dispatch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch({ type: 'SEARCH_RECIPES', payload: e.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Szukaj przepisów"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;