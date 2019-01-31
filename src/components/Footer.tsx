import * as React from 'react';
import Link from 'gatsby-link';
import SocialMediaLinks from './SocialMediaLinks';
import { css, cx } from 'emotion';

interface FooterProps {
  lng: 'en' | 'hu';
  id?: string;
}

const firstRow = [
  {
    en: 'About us',
    hu: 'Rólunk',
    link: 'rolunk',
  },
  {
    en: 'Take action',
    hu: 'Cselekedj',
    link: 'cselekves',
  },
  {
    en: 'Donate',
    hu: 'Támogatás',
    link: 'tamogatas',
  },
];
const secondRow = [
  {
    en: 'voluntary',
    hu: 'önkéntesség',
    link: 'rolunk#contribution',
  },
  {
    en: 'events',
    hu: 'események',
    link: 'sorry',
  },
  {
    en: 'transparency',
    hu: 'átláthatóság',
    link: 'sorry',
  },
];
const thirdRow = [
  {
    en: 'privacy',
    hu: 'adatvédelem',
    link: 'rolunk#privacy',
  },
  {
    en: 'dictionary',
    hu: 'kisokos',
    link: 'kisokos',
  },
];
const fourthRow = [
  {
    en: 'contributors',
    hu: 'impresszum',
    link: 'rolunk#contributors',
  },
];

const footerStyle = css({
  width: '100%',
  height: '10rem',
  marginTop: '2rem',
  background:
    'linear-gradient(to right, rgba(255, 188, 4, 0.76), rgba(255, 177, 117, 0.54))',
  '@media(max-width:600px)': {
    height: '35rem',
  },
});
const footerGrid = css({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gridTemplateRows: '2rem 1.3rem',
  gridAutoFlow: 'row',
  gridAutoRows: '1.3rem',
  gridGap: '0.6rem',
  justifyContent: 'space-around',
  '@media(max-width: 600px)': {
    gridTemplateColumns: 'auto',
    gridTemplateRows: '3rem 3rem 3rem 3rem',
    gridAutoRows: '2rem',
    textAlign: 'center',
  },
});
const gridItem = css({
  display: 'inline',
  fontFamily: '"Barlow Semi Condensed", sans-serif',
  fontSize: '1rem',
  textAlign: 'center',
  '& a': {
    color: 'black',
    backgroundColor: 'transparent',
    textDecoration: 'none',
  },
  '& a:hover': {
    color: 'black',
    backgroundColor: 'transparent',
    textDecoration: 'underline solid',
  },
  '& a:active': {
    color: 'black',
    backgroundColor: 'lightgray',
    textDecoration: 'none',
  },
  '@media(max-width:600px)': {
    fontSize: '1.3rem',
  },
});
const firstRowStyle = css({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginTop: '0.6rem',
  '@media(max-width:600px)': {
    fontSize: '1.8rem',
  },
});
const footerEmailLink = css({
  color: 'black',
});
const footerBlank = css({
  '@media(max-width: 600px)': {
    display: 'none',
  },
});

export default (props: FooterProps) => (
  <footer
    id={props.id ? props.id : ''}
    className={footerStyle}
    role="contentinfo"
  >
    <hr />
    <div className={footerGrid}>
      {firstRow.map(item => (
        <div className={cx(gridItem, firstRowStyle)} key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className={cx(gridItem, firstRowStyle)}>2017-2018; Democrable</div>
      {secondRow.map(item => (
        <div className={gridItem} key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className={gridItem} id="cclicense">
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
        <div className={gridItem} key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className={cx(gridItem, footerBlank)}>
        <Link to="/sorry" />
      </div>
      <div className={gridItem} id="footer-email">
        <a href="mailto:democrable@gmail.com" className={footerEmailLink}>
          democrable@gmail.com
        </a>
      </div>
      {fourthRow.map(item => (
        <div className={gridItem} key={item.hu}>
          <Link to={`${props.lng}/${item.link}`}>{item[props.lng]}</Link>
        </div>
      ))}
      <div className={cx(gridItem, footerBlank)}>
        <Link to="/sorry" />
      </div>
      <div className={cx(gridItem, footerBlank)}>
        <Link to="/sorry" />
      </div>
      <div className={gridItem}>
        <SocialMediaLinks />
      </div>
    </div>
  </footer>
);
