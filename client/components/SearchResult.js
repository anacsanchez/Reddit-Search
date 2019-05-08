import React from 'react';
import Markdown from 'markdown-to-jsx';

const SearchResult = ({ result }) => {
  const { author, selftext, title, subreddit, url, thumbnail } = result;
  return (
    <div className="search-result">
      <div className="result-sub">r/{subreddit}</div>
      <div className="result-author">{author}</div>
      <div className="result-title"><a href={url}>{title}</a></div>
      <div className="result-content"><Markdown>{selftext}</Markdown></div>
    </div>
  );
};

export default SearchResult;
