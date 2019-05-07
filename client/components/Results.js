import React from 'react';
import SearchResult from './SearchResult';

const Results = ({ results }) => {
  return (
    <div>
      { results.length ? results.map(result => (
        <SearchResult key={result.data.id} result={result.data} />
      )) : null
    }
    </div>
  );
};

export default Results;
