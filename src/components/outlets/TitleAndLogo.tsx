import * as React from 'react';
import Link from 'gatsby-link';

interface TitleAndLogoProps {
  title: string;
  logo: string;
}

export default (props: TitleAndLogoProps) => (
  <div className="title-grid-container">
    <div className="logo-container">
      <img id="ulogo" alt="logo" src={`/assets/media_icons/${props.logo}`} />
    </div>
    <div className="title-container">
      <div className="controls">
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
      <div className="title">
        <h2>{props.title}</h2>
        <hr />
      </div>
    </div>
  </div>
);
