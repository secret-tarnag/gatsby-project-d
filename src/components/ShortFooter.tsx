import * as React from 'react';
import { css } from 'emotion';
import SocialMediaLinks from './SocialMediaLinks';

const shortfooter = css({
  textAlign: 'center',
  height: '5rem',
  backgroundColor: '#fff',
  display: 'grid',
  gridTemplateColumns: '50% 50%',
  gridTemplateRows: '5rem',
  alignContent: 'center',
  justifyContent: 'center',
  '& span': {
    marginTop: '1rem',
    position: 'relative',
    top: '-0.7rem',
    fontSize: '1.2rem',
  },
  '& .shortfooter-item': {
    width: '100%',
    height: '3rem',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

const ccJoin = css({
  position: 'relative',
  top: '0.9rem',
  right: '6rem',
});

export default () => (
  <footer className={`barlow ${shortfooter}`} role="contentinfo">
    <div className="shortfooter-social shortfooter-item">
      <SocialMediaLinks />
    </div>
    <div className="shortfooter-license shortfooter-item">
      <img className={`cc ${ccJoin}`} alt="Creative Commons" src="/assets/cc.svg" />
      <span className=" shortfooter-span"><br />2017-2018; Democrable</span>
    </div>
  </footer>
);