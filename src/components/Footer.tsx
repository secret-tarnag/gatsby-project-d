import * as React from 'react';
import Link from 'gatsby-link';

export default () => (
  <footer className="general-footer" role="contentinfo">
    <hr></hr>
    <div className="footer-grid-container">
      <div className="footer-grid-item first-row">
        <Link to="/rolunk">Rólunk</Link>
      </div>
      <div className="footer-grid-item first-row">
        <Link to="/cselekves">Cselekedj</Link>
      </div>
      <div className="footer-grid-item first-row">
        <Link to="/tamogatas">Támogatás</Link>
      </div>
      <div className="footer-grid-item first-row">2017-2018; Democrable</div>
      <div className="footer-grid-item">
        <Link to="/rolunk#contribution">önkéntesség</Link>
      </div>
      <div className="footer-grid-item">
        <Link to="/sorry">események</Link>
      </div>
      <div className="footer-grid-item">
        <Link to="/sorry">átláthatóság</Link>
      </div>
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
      <div className="footer-grid-item">
        <Link to="/rolunk#privacy">adatvédelem</Link>
      </div>
      <div className="footer-grid-item">
        <Link to="/kisokos">kisokos</Link>
      </div>
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry"></Link>
      </div>
      <div className="footer-grid-item" id="footer-email">
        <a href="mailto:democrable@gmail.com" id="footer-email-link">
          democrable@gmail.com
        </a>
      </div>
      <div className="footer-grid-item">
        <Link to="/rolunk#contributors">impresszum</Link>
      </div>
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry" />
      </div>
      <div className="footer-grid-item footer-blank">
        <Link to="/sorry" />
      </div>
      <div className="footer-grid-item">
        <Link to="/sorry" target="_blank">
          <img
            className="social-media-icon"
            alt="Facebook logo"
            src="/assets/if_facebook_2136487.svg"
          />
        </Link>
        <Link to="/sorry" target="_blank">
          <img
            className="social-media-icon"
            alt="Twitter logo"
            src="/assets/if_twitter_2136496.svg"
          />
        </Link>
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
