import React from 'react';

const SearchResult = ({ result }) => {
  const { author, selftext, title, subreddit, url, thumbnail } = result;
  return (
    <div className="search-result">
      <div className="result-sub">r/{subreddit}</div>
      <div className="result-author">{author}</div>
      <div className="result-title"><a href={url}>{title}</a></div>
      <div className="result-content">{selftext}</div>
    </div>
  );
};

export default SearchResult;
