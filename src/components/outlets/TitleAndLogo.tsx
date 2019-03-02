import * as React from 'react';
import { css } from 'emotion';

interface TitleAndLogoProps {
  title: string;
  logo: string;
}

const grid = css({
  width: '90%',
  margin: '8rem auto 1rem auto',
  height: '10rem',
  display: 'grid',
  gridTemplateColumns: '25% 75%',
  gridTemplateRows: '10rem',
  justifyContent: 'start',
  alignContent: 'flex-start',
  backgroundColor: 'transparent',
  '@media(max-width: 1000px)': {
    gridTemplateColumns: '45% 55%',
  },
});

const controls = css({
  margin: '1rem',
  fontSize: '1.8rem',
});

const title = css({
  fontSize: '3.5rem',
  fontFamily: '"Slabo 27px", serif',
  margin: '0 1rem 0 1rem',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'right',
});
const logoContainer = css({
  width: '100%',
  height: '100%',
});
const logo = css({
  width: 'auto',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '100%',
  position: 'relative',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
});

export default (props: TitleAndLogoProps) => (
  <div className={grid}>
    <div className={logoContainer}>
      <img
        className={logo}
        alt="logo"
        src={`/assets/media_icons/${props.logo}`}
      />
    </div>
    <div id="title-container">
      <div className={controls}>
        <a id="chevron-right" href="#">
          <img
            id="chr-right"
            alt="next page"
            src="/assets/baseline-chevron_right-24px.svg"
          />
        </a>
        <a id="chevron-left" href="#">
          <img
            id="chr-left"
            alt="previous page"
            src="/assets/baseline-chevron_left-24px.svg"
          />
        </a>
      </div>
      <div className={title}>
        <h2 className="slabo">{props.title}</h2>
        <hr className="horizontal" />
      </div>
    </div>
  </div>
);
