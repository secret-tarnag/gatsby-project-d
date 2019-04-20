import * as React from 'react';
import Link from 'gatsby-link';

interface NavBarProps {
  isHomePage: boolean;
  lng: 'en' | 'hu';
  urlSlug: string;
  id?: string;
}

interface NavBarState {
  preScrollPos: number;
}

const links = [
  {
    en: 'Independent Media',
    hu: 'Független média',
    link: 'fuggetlen',
    id: 'independent',
  },
  {
    en: 'Propaganda',
    hu: 'Propaganda',
    link: 'propaganda',
    id: 'propaganda',
  },
];

const sideNav = [
  {
    en: 'take action',
    hu: 'cselekedj',
    logo: 'accessibility_new',
    link: 'cselekves',
    iconId: 'takeaction_icon',
  },
  {
    en: 'dictionary',
    hu: 'kisokos',
    logo: 'explore',
    link: 'kisokos',
    iconId: 'dictionary_icon',
  },
  {
    en: 'documents',
    hu: 'dokumentumtár',
    logo: 'format_align_justify',
    link: 'dokumentumtar',
    iconId: 'documents_icon',
  },
  {
    en: 'join us',
    hu: 'csatlakozz',
    logo: 'supervised_user_circle',
    link: 'csatlakozz',
    iconId: 'joinus_icon',
  },
  {
    en: 'donate',
    hu: 'támogatás',
    logo: 'monetization_on',
    link: 'tamogatas',
    iconId: 'donate_icon',
  },
  {
    en: 'about us',
    hu: 'rólunk',
    logo: 'all_inclusive',
    link: 'rolunk',
    iconId: 'about_icon',
  },
  {
    en: 'log in',
    hu: 'belépés',
    logo: 'chevron_right',
    link: 'sorry',
    iconId: 'signin_icon',
  },
];

export default class Navbar extends React.PureComponent<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      preScrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', e => this.handleNavScroll());
  }

  componentWillUnmount() {
    window.addEventListener('scroll', e => this.handleNavScroll());
  }

  handleNavScroll() {
    const nav = document.getElementById('hideonscroll');
    if (nav == null) {
      return;
    }
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 550 && this.state.preScrollPos < currentScrollPos) {
      nav.style.opacity = '0';
      nav.style.top = '-5rem';
      // nav.style.display = 'none';
      // setTimeout(() => { nav.style.display = 'none'; }, 400);
    } else {
      // nav.style.display = 'block';
      nav.style.top = '0rem';
      nav.style.opacity = '1';
      // setTimeout(() => { nav.style.opacity = '1'; }, 200);
    }
    this.setState({ preScrollPos: currentScrollPos });
  }

  render() {
    return (
      <div>
        <nav id={this.props.id ? this.props.id : ''} className="nav" role="navigation">
          <ul>
            <li id="logo-container" className="nav-li">
              <Link id="logo-link" to={`${this.props.lng}#heading`}>
                <img id="logo" src="/assets/logo_hres_40826d.png" alt="D logo" />
              </Link>
            </li>
            {!this.props.isHomePage ? (
              <li className="nav-li">
                <Link id="home-container" to={`/${this.props.lng}/`}>
                  <img id="home" src="/assets/baseline-home-white.svg" alt="home" />
                </Link>
              </li>
            ) : (
                ''
              )}
            {links.map(link => (
              <li className="nav-li" id={link.id} key={link.hu}>
                <Link to={`${this.props.lng}/${link.link}`}>{link[this.props.lng]}</Link>
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
                <Link to={`${this.props.lng}/${item.link}`}>
                  <span className="menu_item_title">{item[this.props.lng]}</span>
                  <span id={item.iconId} className="menu_item_icon">
                    <i className="icon fa material-icons">{item.logo}</i>
                  </span>
                </Link>
              </li>
            ))}
            <li className="language-link-container barlow bold">
              <span className="language-link">
                <Link to={`/hu/${this.props.urlSlug}`}>HU</Link>
              </span>
              <span className="language-link">
                <Link to={`/en/${this.props.urlSlug}`}>EN</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
