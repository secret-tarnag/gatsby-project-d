import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DictionaryListItem from '../components/dictionary/DictionaryListItem';

import '../pages/css/dictionary.css';

const content = [
  {
    title: 'autokrácia',
    pharagraphs: [
      {
        text: 'Az autokrácia (magyarul: egyeduralom, önkényuralom) olyan politikai rendszer, amelyben a politikai' +
          ' hatalom egésze egyetlen személy (vagy személyek kis zárt csoportja) kezében összpontosul.',
      },
    ],
  },
  {
    title: 'diktatúra',
    pharagraphs: [
      {
        text: 'A diktatúra autokrácia, vagyis valamely személynek vagy csoportnak az állam törvényeit figyelmen kívül' +
          ' hagyó, erőszakszervezetekre támaszkodó, kivételes törvényekkel szentesített korlátlan hatalma.',
      },
    ],
  },
  {
    title: 'fékek és ellensúlyok',
    pharagraphs: [
      {
        text: 'A hatalmi ágak szétválasztásának és egymás fölötti ellenőrzési jogosítványaiknak biztosítása és a ' +
          'túlhatalom kialakulásának megakadályozása érdekében törvényben bevezetett intézkedések és jogi restrikciók.',
      },
    ],
  },
  {
    title: 'hatalmi ágak szétválasztása',
    pharagraphs: [
      {
        text: 'A hatalomkoncentráció megakadályozásának eszközeként az államhatalom fő ' +
          'funkcióinak elválasztását, különböző állami szervekre történő szétosztását, az ezek közötti kölcsönös ' +
          'ellenőrzést és egyensúlyban tartást jelenti.',
      },
    ],
  },
  {
    title: 'öncenzúra',
    pharagraphs: [
      {
        text: 'A szóbeli vagy írásbeli megnyilvánulások és a tettek fölötti önellenőrzés gyakorlata a vélt' +
          ' (vagy valós) következmények elkerülésének érdekében.',
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
