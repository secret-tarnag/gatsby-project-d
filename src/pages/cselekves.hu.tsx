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
    to: '#cause',
  },
  {
    text: 'Miért rossz, ami nem független? ...',
    to: '#summary',
  },
  {
    text: 'A nem igazmondás fajtái ...',
    to: '#variety',
  },
  {
    text: 'Mit tehetünk, ha nem akarunk valótlanságokat olvasni? ...',
    to: '#possibilities',
  }
];

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="hu" urlSlug="cselekves" />
    <ScrollToTopButton />
    <header className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves">Cselekedj</h2>
    </header>
    <LinkList links={links} />

    <Footer lng="hu" />
  </Layout>
);