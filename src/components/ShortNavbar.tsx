import * as React from 'react';
import Link from 'gatsby-link';

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
    id: 'independent_media',
  },
];

export default (props: ShortNavBarProps) => (
  <nav role="navigation" className="barlow shortnav">
    <img id="logo" src="/assets/logo_hres_transparent.png" alt="D logo" />
    <Link to={`/hu/${props.urlSlug}`}>HU</Link>
    <Link to={`/en/${props.urlSlug}`}>EN</Link>
    {links.map(link => (
      <Link id={link.id} to={link.link}>{link[props.lng]}</Link>
    ))}
  </nav>
);