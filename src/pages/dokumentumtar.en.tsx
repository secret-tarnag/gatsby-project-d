import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './css/library.css';
import LibraryListItem from '../components/library/LibraryListItem';

const p = [
  {
    text: 'Privacy Protection Declaration',
    to: '/en/adatvedelem',
    comment: '04/10/2018',
  },
];
const c = [
  {
    text: 'Csepeli Hírmondó',
    to: '',
    comment: 'Issue 22/02/2018',
  },
];
const f = [
  {
    text: 'Foglalt nevek listája',
    to: '',
    comment: 'Democrable tagok görög álnevei',
  },
];
const j = [
  {
    text: 'Józsefváros (local newspaper)',
    to: '',
    comment: 'Issue 04/07/2018',
  },
];

export default () => (
  <Layout>
    <Navbar id="topnav" isHomePage={true} lng="en" urlSlug="dokumentumtar" />
    <div className="barlow library-main" id="heading">
      <h2>Dokumentumtár</h2>
    </div>
    <div className="library-list barlow">
      <LibraryListItem title="A" links={c} />
      <LibraryListItem title="C" links={f} />
      <LibraryListItem title="F" links={j} />
      <LibraryListItem title="J" links={p} />
    </div>
    <Footer lng="en" id="library-footer-grid" />
  </Layout>
);
