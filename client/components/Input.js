import React from 'react';

const Input = ({ fetchQuery }) => {
  return (
    <div id="input-form">
      <form onSubmit={fetchQuery}>
        <input type="text" name="query" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Input;
