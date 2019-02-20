import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DictionaryListItem from '../components/dictionary/DictionaryListItem';

import '../pages/css/dictionary.css';

const content = [
  {
    title: 'átláthatóság',
    pharagraphs: [
      {
        text: '(transzparencia) Az átláthatóság az elszámoltathatóság és az integritás mellett a közpénzekkel ' +
          'való gazdálkodás egyik legfontosabb szempontja, ezáltal demokratikus alapelv. Az átláthatóság semmi mást ' +
          'nem jelent, mint hogy a közpénzek felett rendelkező személyek vagy szervezetek ide tartozó tevékenysége ' +
          'teljes mértékben nyilvános, megismerhető.',
      },
    ],
  },
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
    title: 'demokrácia',
    pharagraphs: [
      {
        text: 'Olyan politikai kormányzati rendszer, melyben a hatalmat közvetlenül vagy közvetetten (választott ' +
          'képviselők útján) az emberek (vagy bizonyos cenzusnak megfelelő emberek: pl. 18 év feletti korúak) ' +
          'gyakorolják.',
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
    title: 'elszámoltathatóság',
    pharagraphs: [
      {
        text: 'Az elszámoltathatóság az átláthatóság és az integritás mellett a közpénzekkel ' +
          'való gazdálkodás egyik legfontosabb szempontja, ezáltal demokratikus alapelv. Azt jelenti, hogy ' +
          'bármely közpénzek felett rendelkező személy vagy szervezet működése ellenőrizhető, az esetleges hibák ' +
          'felderíthetők és a jogsértések megbüntethetők.',
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
    title: 'független média',
    pharagraphs: [
      {
        text: 'Olyan médiumok együttese melyek nem állnak gazdasági, politikai vagy személyes érdekeknek kedvező ' +
          'befolyás alatt. Az szerkesztőség értékrendje által gyakorolt hatásokat nem tekintjük függésnek, hiszen ' +
          'nincs olyan médium, ami ne lenne valamilyen értékrend szerint elkötelezett.',
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
    title: 'integritás',
    pharagraphs: [
      {
        text: 'Az integritás az átláthatóság és az elszámoltathatóság mellett a közpénzekkel ' +
          'való gazdálkodás egyik legfontosabb szempontja, ezáltal demokratikus alapelv. Azt fejezi ki, hogy ' +
          'a közpénzek felett rendelkező szervezetek vagy személyek ellenállóak-e a különböző szándékos helytelen ' +
          'magatartással szemben (pl. korrupció).',
      },
    ],
  },
  {
    title: 'médiatudatosság',
    pharagraphs: [
      {
        text: 'Az információ különböző megjelentetési technikáinak és ezen módszerek hasznának és veszélyeinek ' +
          'ismerete, melynek használatával az egyén képes elkülöníteni a valóságot a fikciótól, és felismerni a ' +
          'valóság ábrázolásának küönböző szintjeit.',
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
  {
    title: 'plurális média',
    pharagraphs: [
      {
        text: 'Sokszínű, sokféle értékrendű, az eltérő véleményeknek és elemzéseknek hangot adó, sok tulajdonos által' +
          ' tulajdonolt média.',
      },
    ],
  },
  {
    title: 'propaganda',
    pharagraphs: [
      {
        text: 'Nem tényszerű információ és ennek terjesztése, mely a célközönség befolyásolására szolgál. ' +
          'A tényszerűtlenség elérhető ' +
          'csupán a tények szelektív válogatásával, tudatos elferdítésével vagy egyszerű hazugsággal. Gyakran ' +
          'politikai célok elérésének eszköze. A propagandát közlő felületekre itthon elterjedt megnevezés a ' +
          'propaganda média, mi csupán a propaganda szóval jelöljük őket, mivel ezek a közegek nem médiumok.',
      },
    ],
  },
  {
    title: 'újságírói etikai szabályzat',
    pharagraphs: [
      {
        text: 'Olyan magatartási vagy szakmai szabályok, melyek segítik az újságírókat az etikus munkavégzésben.',
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
