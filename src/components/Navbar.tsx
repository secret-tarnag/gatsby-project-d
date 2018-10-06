import * as React from 'react';
import Link from 'gatsby-link';

interface NavBarProps {
  isHomePage: boolean;
  lng: 'en' | 'hu';
  urlSlug: string;
}

const links = [
  {
    en: 'Independent Media',
    hu: 'Független média',
    link: 'fuggetlen',
  },
  {
    en: 'Propaganda',
    hu: 'Propaganda',
    link: 'propaganda',
  },
];

const sideNav = [
  {
    en: 'take action',
    hu: 'cselekedj',
    logo: <i className="icon fa material-icons">accessibility_new</i>,
    link: 'cselekves',
  },
  {
    en: 'dictionary',
    hu: 'kisokos',
    logo: <i className="icon fa material-icons">explore</i>,
    link: 'kisokos',
  },
  {
    en: 'documents',
    hu: 'dokumentumtár',
    logo: <i className="icon fa material-icons">format_align_justify</i>,
    link: 'dokumentumtar',
  },
  {
    en: 'join us',
    hu: 'csatlakozz',
    logo: <i className="icon fa material-icons">supervised_user_circle</i>,
    link: 'csatlakozz',
  },
  {
    en: 'donate',
    hu: 'támogass',
    logo: <i className="icon fa material-icons">monetization_on</i>,
    link: 'tamogatas',
  },
  {
    en: 'about us',
    hu: 'rólunk',
    logo: <i className="icon fa material-icons">all_inclusive</i>,
    link: 'rolunk',
  },
  {
    en: 'log in',
    hu: 'belépés',
    logo: <i className="icon fa material-icons">chevron_right</i>,
    link: 'sorry',
  },
];

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
        {links.map(link => (
          <li className="nav-li">
            <Link to={link.link}>{link[props.lng]}</Link>
          </li>
        ))}
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
        {sideNav.map(item => (
          <li id="act" className="menu_item">
            <Link to={item.link}>
              <span className="menu_item_title">{item[props.lng]}</span>
              <span className="menu_item_icon">
                <i className="icon fa material-icons">{item.logo}</i>
              </span>
            </Link>
          </li>
        ))}
        <li className="language-link-container barlow bold">
          <span className="language-link">
            <Link to={`/hu/${props.urlSlug}`}>HU</Link>
          </span>
          <span className="language-link">
            <Link to={`/en/${props.urlSlug}`}>EN</Link>
          </span>
        </li>
      </ul>
    </div>
  </div>
);
