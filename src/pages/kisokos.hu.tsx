import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default () => (
  <Layout>
    <Navbar id="topnav" isHomePage={false} lng="hu" urlSlug="kisokos" />
    <div className="barlow dictionary-main" id="heading">
      <h2>Kisokos</h2>
    </div>

    <Footer lng="hu" id="library-footer-grid" />
  </Layout>
);
