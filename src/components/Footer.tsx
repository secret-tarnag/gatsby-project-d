import * as React from 'react';
import Link from 'gatsby-link';

interface FooterProps {
  lng: 'en' | 'hu';
}

const firstRow = [
  {
    en: 'About us',
    hu: 'Rólunk',
    link: 'rolunk'
  },
  {
    en: 'Take action',
    hu: 'Cselekedj',
    link: 'cselekves'
  },
  {
    en: 'Donate',
    hu: 'Támogatás',
    link: 'tamogatas'
  }
];
const secondRow = [
  {
    en: 'voluntary',
    hu: 'önkéntesség',
    link: 'rolunk#contribution'
  },
  {
    en: 'events',
    hu: 'események',
    link: 'sorry'
  },
  {
    en: 'transparency',
    hu: 'átláthatóság',
    link: 'sorry'
  }
];
const thirdRow = [
  {
    en: 'privacy',
    hu: 'adatvédelem',
    link: 'rolunk#privacy'
  },
  {
    en: 'dictionary',
    hu: 'kisokos',
    link: 'kisokos'
  }
];
const fourthRow = [
  {
    en: 'contributors',
    hu: 'impresszum',
    link: 'rolunk#contributors'
  }
];

export default (props: FooterProps) => (
  <footer className="general-footer" role="contentinfo">
    <hr></hr>
    <div className="footer-grid-container">
      {firstRow.map(item => (
        <div className="footer-grid-item first-row" key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className="footer-grid-item first-row">2017-2018; Democrable</div>
      {secondRow.map(item => (
        <div className="footer-grid-item" key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className="footer-grid-item" id="license">
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          <img
            alt="Creative Commons Licenc"
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
          />
        </a>
        <br />
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        />
      </div>
      {thirdRow.map(item => (
        <div className="footer-grid-item" key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry"></Link>
      </div>
      <div className="footer-grid-item" id="footer-email">
        <a href="mailto:democrable@gmail.com" id="footer-email-link">
          democrable@gmail.com
        </a>
      </div>
      {fourthRow.map(item => (
        <div className="footer-grid-item" key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry" />
      </div>
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry" />
      </div>
      <div className="footer-grid-item">
        <a href="https://www.facebook.com/Democrable" target="_blank">
          <img
            className="social-media-icon"
            alt="Facebook logo"
            src="/assets/if_facebook_2136487.svg"
          />
        </a>
        <a href="https://twitter.com/democrable" target="_blank">
          <img
            className="social-media-icon"
            alt="Twitter logo"
            src="/assets/if_twitter_2136496.svg"
          />
        </a>
        <a href="https://github.com/daroczypal/project-d-." target="_blank">
          <img
            id="github"
            className="social-media-icon"
            alt="Github logo"
            src="/assets/if_icon-social-github_211904.svg"
          />
        </a>
      </div>
    </div>
  </footer>
);
