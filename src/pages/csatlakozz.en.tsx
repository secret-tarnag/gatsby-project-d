import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';

export default () => (
  <Layout>
    <nav role="navigation" className="barlow">
      <img id="logo" src="logo/logo_hires_invert.png" alt="D logo" />
      <Link to="/hu/csatlakozz">HU</Link>
      <Link to="/en/csatlakozz">EN</Link>
      <Link id="mainpage" to="/en/">home</Link>
      <Link id="propaganda_media" to="/en/propaganda">propaganda</Link>
      <Link id="fuggetlen_media" to="/en/fuggetlen">independent media</Link>
    </nav>
  </Layout>
);