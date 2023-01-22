import React from 'react';

const GifSearch = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target.query.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..."  name="query" />
      <button type="submit">Search</button>
    </form>
  )
}

export default GifSearch;