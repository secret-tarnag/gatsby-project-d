import * as React from 'react';
import Link from 'gatsby-link';

interface NavBarProps {
  isHomePage: boolean;
}

export default (props: NavBarProps) => (
  <div>
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
            onClick={() => {
              const hamburger = document.querySelector('.hamburger');
              const menu = document.querySelector('.menu');

              hamburger.classList.toggle('is-active');
              menu.classList.toggle('is-active');
            }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </li>
      </ul>
    </nav>
    <div id="sidenav" className="menu" role="menu">
      <ul className="menu-list">
        <li id="act" className="menu_item">
          <a href="cselekves.html">
            <span className="menu_item_title" id="cselekedj" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">accessibility_new</i>
            </span>
          </a>
        </li>
        <li id="fakenews" className="menu_item">
          <a href="kisokos.html">
            <span className="menu_item_title" id="kisokos" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">explore</i>
            </span>
          </a>
        </li>
        <li id="documents" className="menu_item">
          <a href="dokumentumtar.html">
            <span className="menu_item_title" id="dokumentumtar" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">format_align_justify</i>
            </span>
          </a>
        </li>
        <li id="getinvolved" className="menu_item">
          <a href="csatlakozz.html">
            <span className="menu_item_title" id="csatlakozz" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">supervised_user_circle</i>
            </span>
          </a>
        </li>
        <li id="donate" className="menu_item">
          <a href="tamogatas.html">
            <span className="menu_item_title" id="tamogatas" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">monetization_on</i>
            </span>
          </a>
        </li>
        <li id="about" className="menu_item">
          <a href="rolunk.html">
            <span className="menu_item_title" id="rolunk" />
            <span className="menu_item_icon">
              <i className="icon fa material-icons">all_inclusive</i>
            </span>
          </a>
        </li>
        <li id="signin" className="menu_item">
          <a href="sorry.html">
            <span className="menu_item_title" id="belepes" />
            <span id="signin_icon" className="menu_item_icon">
              <i className="icon fa material-icons">chevron_right</i>
            </span>
          </a>
        </li>
        <li className="language-link-container barlow bold">
          <span className="language-link">
            <a href="javascript:i18next.changeLanguage('hu')">HU</a>
          </span>
          <span className="language-link">
            <a href="javascript:i18next.changeLanguage('en')">EN</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
);
