import React from 'react';

const Input = ({ fetchQuery }) => {
  return (
    <form onSubmit={fetchQuery}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  )
}

export default Input;
