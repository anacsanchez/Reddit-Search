import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

const Splash = () => (
  <div id="splash">
    <FontAwesomeIcon icon={ faReddit } size='6x' color="hsl(14, 100%, 55%)" className="reddit-icon"/>
    <div className="reddit-icon-bg"></div>
  </div>
);

export default Splash;
