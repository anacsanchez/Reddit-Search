import React, { useState } from 'react';
import Markdown from 'markdown-to-jsx';

const ResultText = ({ text }) => {
  const [ isExpanded, setExpanded ] = useState(false);

  return (
    <div className="result-text-content" onClick={() => setExpanded(!isExpanded)} >
      { isExpanded ?
        <div className="result-text-container">
          <div className="result-text-inner">
            <Markdown>{text}</Markdown>
          </div>
        </div> :
        <div className="result-text-preview">
            <Markdown>{text.slice(0, 1000)}</Markdown>
        </div>
    }
    </div>
  );
};

export default ResultText;
