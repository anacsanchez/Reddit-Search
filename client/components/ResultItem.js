import React from 'react';
import Markdown from 'markdown-to-jsx';

const ResultItem = ({ resut }) => {
  const { author, selftext, title, subreddit, url, thumbnail } = result;
  return (
    <div className="result-item">
      <div className="result-thumbnail"><img src={ redditDefaults[thumbnail] ? null : thumbnail } /></div>
      <div className="result-content">
        <div className="result-title"><a href={url} target="_blank" rel="noreferrer noopener">{title}</a></div>
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

const redditDefaults = {
  'self': true,
  'default': true,
  'image': true
};
