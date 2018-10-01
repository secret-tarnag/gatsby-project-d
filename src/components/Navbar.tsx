import * as React from 'react';
import Link from 'gatsby-link';

interface NavBarProps {
  isHomePage: boolean;
}

export default (props: NavBarProps) => (
  <nav id="topnav" className="nav" role="navigation">
    <ul>
      <li id="logo-container" className="nav-li">
        <Link id="logo-link" to="#heading">
          <img id="logo" src="assets/logo_hires_40826d.png" alt="D logo" />
        </Link>
      </li>
      {!props.isHomePage ? (
        <li className="nav-li">
          <Link id="home-container" to="/">
            <img id="home" src="assets/baseline-home-white.svg" alt="home" />
          </Link>
        </li>
      ) : (
        ''
      )}
      <li className="nav-li">
        <Link to="fuggetlen">Független média</Link>
      </li>
      <li className="nav-li">
        <Link to="propaganda">Propaganda</Link>
      </li>
      <li id="nav-right" className="nav-li">
        <button
          className="hamburger hamburger--3dy"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </li>
    </ul>
  </nav>
);
