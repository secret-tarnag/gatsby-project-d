import * as React from 'react';
import { css } from 'emotion';

const buttonContainer = css({
  display: 'none',
  position: 'fixed',
  top: '7rem',
  right: '5rem',
  zIndex: 4,
});
const button = css({
  height: '2rem',
  width: '2rem',
  border: '1px solid #969696',
  borderRadius: '50%',
  outline: 'none',
  backgroundColor: 'transparent',
  color: '#000',
  ':hover': {
    borderColor: '#000',
  },
  '@media(max-width:1000px)': {
    right: '0.5rem',
  },
  '@media(max-width: 600px)': {
    right: '-3rem',
  },
});

export default () => (
  <div className={buttonContainer} id="st-butt-cont">
    <button
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
      className={button}
    >
      <i className="material-icons">expand_less</i>
    </button>
  </div>
);
