import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

const SearchInput = ({ fetchQuery }) => {
  return (
    <form onSubmit={fetchQuery}>
      <div id="form-title">
        <FontAwesomeIcon icon={ faReddit } size='6x' color="hsl(14, 100%, 55%)" className="reddit-icon"/>
        <div className="reddit-icon-bg"></div>
      </div>
      <input type="text" name="query"/>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
