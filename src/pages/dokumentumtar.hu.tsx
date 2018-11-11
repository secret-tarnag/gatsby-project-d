import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './css/library.css';
import LibraryListItem from '../components/library/LibraryListItem';

const a = [
  {
    text: 'Adatvédelmi Nyilatkozat',
    to: '/hu/adatvedelem',
    comment: '2018. október 4.',
  },
];
const c = [
  {
    text: 'Csepeli Hírmondó',
    to: '',
    comment: '2018.02.22. szám',
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
    text: 'Józsefváros (kerületi lap)',
    to: '',
    comment: '2018. július 4-i szám',
  },
];

export default () => (
  <Layout>
    <Navbar id="topnav" isHomePage={true} lng="hu" urlSlug="dokumentumtar" />
    <div className="barlow library-main" id="heading">
      <h2 className="library-title">Dokumentumtár</h2>
    </div>
    <div className="library-list barlow">
      <LibraryListItem title="A" links={a} />
      <LibraryListItem title="C" links={c} />
      <LibraryListItem title="F" links={f} />
      <LibraryListItem title="J" links={j} />
    </div>
    <Footer lng="hu" id="library-footer-grid" />
  </Layout>
);
