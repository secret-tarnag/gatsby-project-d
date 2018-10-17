import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

import './css/act.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import ScrollToTopButton from '../components/ScrollToTopButton';

const links = [
  {
    text: 'Hogy miért is van ez az oldal? ...',
    to: '/hu/cselekves#cause',
  },
  {
    text: 'Miért rossz, ami nem független? ...',
    to: '/hu/cselekves#summary',
  },
  {
    text: 'A nem igazmondás fajtái ...',
    to: '/hu/cselekves#variety',
  },
  {
    text: 'Mit tehetünk, ha nem akarunk valótlanságokat olvasni? ...',
    to: '/hu/cselekves#possibilities',
  }
];

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="hu" urlSlug="cselekves" />
    <ScrollToTopButton />
    <div className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves">Cselekedj</h2>
    </div>
    <LinkList links={links} />

    <Footer lng="hu" />
  </Layout>
);