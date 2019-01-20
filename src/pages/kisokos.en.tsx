import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DictionaryListItem from '../components/dictionary/DictionaryListItem';

const content = [
  {
    title: 'liberalism',
    pharagraphs: [
      {
        text: 'Lorem ipsum dolor sit amet in English bleble blabla lahlah hallali#1',
      },
      {
        text: 'Lorem ipsum  lihd lsadée ések fse ések ékscxcknv rk rj v ncy #2',
      },
    ],
  },
];

export default () => (
  <Layout>
    <Navbar id="topnav" isHomePage={false} lng="en" urlSlug="kisokos" />
    <div className="barlow dictionary-main" id="heading">
      <h2 className="dictionary-title">Dictionary</h2>
    </div>
    <div>
      {content.map(item => (
        <DictionaryListItem title={item.title} pharagraphs={item.pharagraphs} />
      ))}
    </div>
    <Footer lng="en" id="library-footer-grid" />
  </Layout>
);
