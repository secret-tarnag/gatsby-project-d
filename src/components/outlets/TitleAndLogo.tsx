import * as React from 'react';
import { css } from 'emotion';

interface TitleAndLogoProps {
  title: string;
  logo: string;
}

const grid = css({
  width: '90%',
  margin: '8rem auto 0 auto',
  height: '13rem',
  display: 'grid',
  gridTemplateColumns: '25% 75%',
  gridTemplateRows: '13rem',
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
  fontSize: '5rem',
  fontFamily: '"Slabo 27px", serif',
  margin: '0 1rem 0 1rem',
  position: 'relative',
  top: '-1rem',
});

const logo = css({
  width: '80%',
  maxHeight: '11rem',
  margin: '1rem',
});

export default (props: TitleAndLogoProps) => (
  <div className={grid}>
    <div id="logo-container">
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
