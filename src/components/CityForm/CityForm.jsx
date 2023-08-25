/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function CityForm({ setInputValue }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(search.trim().toLocaleLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a city ..."
        value={search}
        onChange={handleChange}
      />
      <button type="submit">OK</button>
    </form>
  );
}

export default CityForm;
