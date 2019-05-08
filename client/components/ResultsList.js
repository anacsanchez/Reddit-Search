import React from 'react';
import ResultItem from './ResultItem';

const Results = ({ results }) => {
  return (
    <div id="results-section">
    { results.length ?
        results.map(result => (
          <ResultItem key={result.data.id} result={result.data} />
        ))
        : null
    }
    </div>
  );
};

export default Results;
