import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';

const ResultText = ({ isSpoiler, text }) => {
  const [ isExpanded, setExpanded ] = useState(false);

  return (
    <div className="result-text-content" onClick={() => setExpanded(!isExpanded)} >
    {
      isExpanded ?
      <div className="result-text-container">
        <div className="result-text-inner">
          <Markdown>{text}</Markdown>
        </div>
      </div> :
      <div className="result-text-preview-container">
        <div className="result-text-preview">
          { isSpoiler ? <h2>SPOILERS - Click to Expand</h2> : <Markdown>{text.slice(0, 1000)}</Markdown> }
        </div>
      </div>
    }
    </div>
  );
};

export default ResultText;
