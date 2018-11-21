import * as React from 'react';

import Layout from '../components/layout';
import './css/sorry.css';
import { Link } from '@reach/router';

const SorryPage = () => (
  <Layout>
    <div id="pic" />
    <div id="sorry">
      <p id="p1">
        <b>Dear User!</b>
        <br />
        Our committed team are always working on improving the webpage.
        <br />
        However, this feature is still under construction. We hope we can
        release it soon.
      </p>
      <p id="p2">
        If you fancy helping developing a webpage or contribute in other ways,{' '}
        <Link className="sorrylink" to="/en/csatlakozz">
          join
        </Link>{' '}
        our team!
        <br />
        Democrable Developers
      </p>
      <p>
        <Link className="sorrylink" to="/en/">
          Homepage
        </Link>
      </p>
      <p>
        CreativeCommons 4.0;
        <br /> 2018, democrable.com
      </p>
    </div>
    <div className="language-button-container">
      <span className="language-button">
        <Link className="sorrylink" to="/hu/sorry">
          HU
        </Link>
      </span>
      <span className="language-button">
        <Link className="sorrylink" to="/en/sorry">
          EN
        </Link>
      </span>
    </div>
  </Layout>
);

export default SorryPage;
