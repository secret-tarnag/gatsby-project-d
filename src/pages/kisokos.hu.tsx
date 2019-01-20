import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DictionaryListItem from '../components/dictionary/DictionaryListItem';

import '../pages/css/dictionary.css';

const content = [
  {
    title: 'liberalizmus',
    pharagraphs: [
      {
        text: 'Lorem ipsum dolor sit amet bleble blabla lahlah hallali#1',
      },
      {
        text: 'Lorem ipsum  lihd lsadée ések fse ések ékscxcknv rk rj v ncy #2',
      },
    ],
  },
  {
    title: 'konzervativizmus',
    pharagraphs: [
      {
        text: 'Még egy lorem ipsumocska #3',
      },
      {
        text: 'Meg még egy hesteg négy',
      },
    ],
  },
];

export default () => (
  <Layout>
    <Navbar id="topnav" isHomePage={true} lng="hu" urlSlug="kisokos" />
    <div className="barlow dictionary-main" id="heading">
      <h2 className="dictionary-title">Kisokos</h2>
    </div>
    <div className="dictionary-list">
      {content.map(item => (
        <DictionaryListItem title={item.title} pharagraphs={item.pharagraphs} />
      ))}
    </div>
    <Footer lng="hu" id="library-footer-grid" />
  </Layout>
);
