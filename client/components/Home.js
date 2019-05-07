import React, { useState } from 'react';
import Input from './Input';
import Results from './Results';

const Home = () => {
  const [ results, setResults ] = useState([]);
  const [ loading, isLoading ] = useState(false);

  const fetchResults = (evt) => {
    evt.preventDefault();
    console.log(evt.target.query.value);

    const fetchData = async() => {
      const redditRes = await fetch('https://www.reddit.com/search.json?q=beatles&sort=new').then(res => res.json());
      setResults(redditRes.data.children);
      // console.log(data);
    };
    fetchData();

  };

  return(
    <div>
      { console.log(results)}
      <Input fetchQuery={fetchResults}/>
      <Results results={results}/>
    </div>
  );
};

export default Home;
