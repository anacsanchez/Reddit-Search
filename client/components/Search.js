import React, { useState } from 'react';
import SearchInput from './SearchInput';
import ResultsList from './ResultsList';

const Search = () => {
  const [ results, setResults ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);

  const fetchResults = (evt) => {
    evt.preventDefault();

    const query = evt.target.query.value;
    setLoading(true);

    const fetchData = async() => {
      const redditResults = await fetch(`https://www.reddit.com/search.json?q=${query}&sort=new`).then(res => res.json());
      setResults(redditResults.data.children);
      setLoading(false);
    };
    fetchData();
  };

  return(
    <div id="search-section">
      <SearchInput fetchQuery={fetchResults}/>
      { isLoading ? <div className="loading">Searching Reddit...</div> : <ResultsList results={results} /> }
    </div>
  );
};

export default Search;
