import React from 'react';
import Markdown from 'markdown-to-jsx';

const ResultItem = ({ result }) => {
  const { author, selftext, title, subreddit, url, thumbnail } = result;
  return (
    <div className="search-result">
      <div className="result-thumbnail"><img src={thumbnail === 'self' || thumbnail === 'default' ? null : thumbnail } /></div>
      <div className="result-content">
        <div className="result-title"><a href={url}>{title}</a></div>
        <div className="result-details">
          <div className="result-sub">r/{subreddit}</div>
          <div className="result-author">u/{author}</div>
        </div>
        <div className="result-text"><Markdown>{selftext.slice(0, 1000)}</Markdown></div>
      </div>
    </div>
  );
};

export default ResultItem;
