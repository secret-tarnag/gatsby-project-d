import * as React from 'react';
import Link from 'gatsby-link';
import SocialMediaLinks from './SocialMediaLinks';

export default () => (
  <footer className="barlow" role="contentinfo">
    <div className="shortfooter-social">
      <SocialMediaLinks />
    </div>
    <div className="shortfooter-license">
      <img className="cc" id="cc-join" alt="Creative Commons" src="/assets/cc.svg" />
      <span className=" shortfooter-span"><br />2017-2018; Democrable</span>
    </div>
  </footer>
);