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

export default class ScrollToTopButton extends React.PureComponent<'', ''> {
  constructor(props: '') {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', e => this.handleButtonScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', e => this.handleButtonScroll());
  }

  handleButtonScroll() {
    const scrollButton = document.getElementById('st-butt-cont');
    if (scrollButton == null) {
      return;
    }
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }

  render() {
    return (
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
  }
}
