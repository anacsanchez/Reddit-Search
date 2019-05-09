import React from 'react';
import ResultText from './ResultText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFileAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ResultItem = ({ result }) => {
  const { author, selftext, title, subreddit, url, thumbnail } = result;
  return (
    <div className="result-item">
      <div className="result-thumbnail">
        { redditDefaults[thumbnail] ? <FontAwesomeIcon  color="hsl(220, 60%, 100%, 40%)" size="5x" icon={ redditDefaults[thumbnail]} /> : <img src={ thumbnail } /> }
      </div>
      <div className="result-content">
        <div className="result-title"><a href={url} target="_blank" rel="noreferrer noopener">{title}</a></div>
        <div className="result-details">
          <div className="result-sub">r/{subreddit}</div>
          <div className="result-author">u/{author}</div>
        </div>
        { selftext.length ? <ResultText text={ selftext } /> : null }
      </div>
    </div>
  );
};

export default ResultItem;

const redditDefaults = {
  'self': faCommentAlt,
  'default': faFileAlt,
  'image': faFileImage,
  'spoiler': faExclamationTriangle
};
