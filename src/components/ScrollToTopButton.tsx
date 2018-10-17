import * as React from 'react';

export default () => (
  <div className="scrolltop-button-container" id="st-butt-cont">
    <button onClick={() => { document.documentElement.scrollTop = 0; }} className="scrolltop-button"><i className="material-icons">expand_less</i></button>
  </div>
)