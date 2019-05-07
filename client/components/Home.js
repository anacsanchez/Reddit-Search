import React, { useState } from 'react';
import Input from './Input';
import Results from './Results';

const Home = () => {
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
    <div>
      <Input fetchQuery={fetchResults}/>
      { isLoading ? 'Searching Reddit...' : <Results results={results} /> }
    </div>
  );
};

export default Home;
