import * as React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

interface ShortNavBarProps {
  lng: 'en' | 'hu';
  urlSlug: string;
}

const links = [
  {
    en: 'home',
    hu: 'főoldal',
    link: '',
    id: 'mainpage',
  },
  {
    en: 'propaganda',
    hu: 'propaganda',
    link: 'propaganda',
    id: 'propaganda_media',
  },
  {
    en: 'independent media',
    hu: 'függetlenek',
    link: 'fuggetlen',
    id: 'fuggetlen_media',
  },
];

const shortnav = css({
  width: '100%',
  height: '4rem',
  padding: '1rem 0',
  background: 'linear-gradient(to right, rgba(95, 158, 160, 0.9), rgba(70, 167, 170, 0.9))',
});

const shortnavLinks = css({
  margin: '0 0.5rem',
  position: 'relative',
  top: '1.1rem',
  float: 'right',
  fontSize: '1.3rem',
  color: 'white',
  ':hover': {
    textDecoration: 'none',
    color: 'white',
  },
  '::after': {
    content: '""',
    display: 'block',
    width: '100%',
    marginTop: '4px',
    height: '3px',
    transition: 'transform .25s ease',
    transform: 'scaleX(0)',
    backgroundColor: 'white',
  },
  ':hover::after, :active::after': {
    transform: 'scaleX(1)',
  }
});
//media query
const shortnavLogo = css({
  width: '4.5rem',
  height: '4.5rem',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  marginLeft: '1rem',
});

export default (props: ShortNavBarProps) => (
  <nav role="navigation" className={`barlow ${shortnav}`}>
    <img className={shortnavLogo} src="/assets/logo_hres_whitetransparent.png" alt="D logo" />
    <Link className={shortnavLinks} to={`/hu/${props.urlSlug}`}>HU</Link>
    <Link className={shortnavLinks} to={`/en/${props.urlSlug}`}>EN</Link>
    {links.map(link => (
      <Link id={link.id} className={shortnavLinks} to={`${props.lng}/${link.link}`}>{link[props.lng]}</Link>
    ))}
  </nav>
);