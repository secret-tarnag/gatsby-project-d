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
    logo: 'accessibility_new',
    link: 'cselekves',
    iconId: 'takeaction_icon'
  },
  {
    en: 'dictionary',
    hu: 'kisokos',
    logo: 'explore',
    link: 'kisokos',
    iconId: 'dictionary_icon'
  },
  {
    en: 'documents',
    hu: 'dokumentumtár',
    logo: 'format_align_justify',
    link: 'dokumentumtar',
    iconId: 'documents_icon'
  },
  {
    en: 'join us',
    hu: 'csatlakozz',
    logo: 'supervised_user_circle',
    link: 'csatlakozz',
    iconId: 'joinus_icon'
  },
  {
    en: 'donate',
    hu: 'támogatás',
    logo: 'monetization_on',
    link: 'tamogatas',
    iconId: 'donate_icon'
  },
  {
    en: 'about us',
    hu: 'rólunk',
    logo: 'all_inclusive',
    link: 'rolunk',
    iconId: 'about_icon'
  },
  {
    en: 'log in',
    hu: 'belépés',
    logo: 'chevron_right',
    link: 'sorry',
    iconId: 'signin_icon'
  },
];

export default (props: NavBarProps) => (
  <div>
    <nav id="topnav" className="nav" role="navigation">
      <ul>
        <li id="logo-container" className="nav-li">
          <Link id="logo-link" to={`${props.lng}#heading`}>
            <img id="logo" src="/assets/logo_hres_40826d.png" alt="D logo" />
          </Link>
        </li>
        {!props.isHomePage ? (
          <li className="nav-li">
            <Link id="home-container" to={`/${props.lng}/`}>
              <img id="home" src="/assets/baseline-home-white.svg" alt="home" />
            </Link>
          </li>
        ) : (
            ''
          )}
        {links.map(link => (
          <li className="nav-li" key={link.hu}>
            <Link to={`${props.lng}/${link.link}`}>{link[props.lng]}</Link>
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
          <li className="menu_item" key={item.hu}>
            <Link to={`${props.lng}/${item.link}`}>
              <span className="menu_item_title">{item[props.lng]}</span>
              <span id={item.iconId} className="menu_item_icon">
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
