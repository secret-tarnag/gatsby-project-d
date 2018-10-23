import React from 'react';
import Layout from '../components/layout';

import './css/privacy.css';

const privacyTitle = "Adatvédelmi Nyilatkozat";
const privacyP1 = "A democrable.org-ot a Democrable Community (a továbbiakban DC) üzemelteti. A DC jelen nyilatkozatával tájékoztatja a honlap felhasználóit, látogatóit adatkezelési gyakorlatáról, az adatok védelmére tett intézkedésekről, valamint a felhasználók jogorvoslati lehetőségeiről.";
const privacyP2 = "Szolgáltatásunk használatával óhatatlanul ránk bíz bizonyos adatokat.";
const privacyT1 = "1. Az adatkezelő";
const privacyP3 = "Democrable Community (e-mail: <a href='mailto:democrable@gmail.com'>democrable@gmail.com</a>)";
const privacyT2 = "2. A kezelt adatok köre";
const privacyP4 = "Bárki látogathatja az oldalt úgy, hogy esetlegesen begyűjtött statisztikai információkon túlmenően személyes adatokat nem szükséges megadnia.";
const privacyTt1 = "2.1. Sütik és elemzési információk";
const privacyP5 = "A honlap használata során automatikusan begyűjtésre kerülhetnek bizonyos készülékadatok, úgymint az eszköz IP-címe (anonimizáltan), a böngésző típusa és verziója és a képernyő paraméterei, valamint rendszeranalitikához használt elemzési adatok.";
const privacyP6 = "A gördülékeny felhasználói élmény biztosításához, és a rendes működéshez az adatkezelő cookiekat tárolhat a felhasználó böngészőjében.";
const privacyTH1 = "Süti neve";
const privacyTH2 = "Elhelyező";
const privacyTH3 = "Süti célja";
const privacyP7 = "A sütik nem mind a DC által kibocsátottak vagy kezeltek, ezért lehetséges, hogy jelen nyilatkozatban foglaltaktól eltérő a kezelésük. További információk a sütik kibocsátói által megadott dokumentumokban:";
const privacyTt2 = "2.2. Regisztráció";
const privacyP8 = "Lehetőség van a honlapra regisztrációra, ennek során meg kell adni a felhasználó teljes nevét, ímél címét és egy azonosító jelszó párost, mely tárolódik a DC rendszerében.";
const privacyTt3 = "2.3. Csatlakozás";
const privacyP9 = "A DC-hez való csatlakozáskor a felhasználónak meg kell adnia egy álnevet és egy ímél címet, melyet a DC a csatlakozott taggal való kommunikáció lehetővé tételéhez nyilvántart.";
const privacyTt4 = "2.4. Támogatás";
const privacyP10 = "Amennyiben Ön támogatja a DC-t az oldalon elérhető PayPal online fizetési rendszeren keresztül, a DC kezelésébe kerülhet neve, a támogatás összege, bankszámlaszáma és a tranzakció ideje. Ezen információkat a DC nem teszi nyilvánosan elérhetővé és harminc nap elteltével, a támogatási összeg kivételével, melyet statisztikai célokra használunk, törli. További információkért és a Paypal adatkezelési gyakorlatáról olvassa el a PayPal vonatkozó dokumentumait:";
const privacyT3 = "3. Az adatkezelés jogalapja";

const trs = [
  {
    td1: "PYPF",
    td2: "paypalobjects.com",
    td3: "Paypal adakozási gomb működés"
  },
  {
    td1: "_ga",
    td2: "democrable.org",
    td3: "Google Analytics azonosító"
  },
  {
    td1: "_gat_gtag_UA_*",
    td2: "democrable.org",
    td3: "Google Analytics azonosító"
  },
  {
    td1: "_gid",
    td2: "democrable.org",
    td3: "Google Analytics mérések"
  }
];

export default () => (
  <Layout>
    <div className="privacy-container">
      <div className="privacy-nav">
        <a id="backlink" href="/hu/"><i className="material-icons">chevron_left</i> Vissza a főoldalra</a>
      </div>
      <div className="privacy-content">
        <h2 className="privacy-title" dangerouslySetInnerHTML={{ __html: privacyTitle }}></h2>
        <p dangerouslySetInnerHTML={{ __html: privacyP1 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP2 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT1 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP3 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT2 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP4 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt1 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP5 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP6 }}></p>
        <table>
          <tr>
            <th dangerouslySetInnerHTML={{ __html: privacyTH1 }}></th>
            <th dangerouslySetInnerHTML={{ __html: privacyTH2 }}></th>
            <th dangerouslySetInnerHTML={{ __html: privacyTH3 }}></th>
          </tr>
          {trs.map(tr => (
            <tr>
              <td>{tr.td1}</td>
              <td>{tr.td2}</td>
              <td>{tr.td3}</td>
            </tr>
          ))}
        </table>
        <p dangerouslySetInnerHTML={{ __html: privacyP7 }}></p>
        <span><a href="https://policies.google.com/technologies" target="_blank">Google Analytics</a></span>
        <span><a href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full" target="_blank">Paypal</a></span>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt2 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP8 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt3 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP9 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt4 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP10 }}></p>
        <ul>
          <li><a href="https://www.paypal.com/hu/webapps/mpp/ua/privacy-full" target="_blank" dangerouslySetInnerHTML={{ __html: privacyTitle }}></a></li>
          <li><a href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full" target="_blank">Cookies and tracking technologies</a></li>
        </ul>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT3 }}></h3>
      </div>
    </div>
  </Layout>
);