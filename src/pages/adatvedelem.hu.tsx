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
const privacyP11 = "A honlap használatához megadott vagy használata során begyűjtött adatok kezelésének, illetve a cookiek tárolásának jogalapja a felhasználó önkéntes hozzájárulása jelen tájékoztató ismeretében, melyről a felhasználó a honlap első használata során kap tájékoztatást.";
const privacyT4 = "4. Az adatkezelés céljai";
const privacyLi1 = "<span class='italic'>Támogatás: </span>A tevékenység során megadott személyes adatok kezelésének célja a szolgáltató és az érintett közötti zavartalan kommunikáció biztosítása. A személyes adatokat a DC eltérő célra nem használja, bizalmasan kezeli, valamint a támogatás statisztikai célokra felhasznált összegén kívül harminc napon belül törli. A Fizetési szolgáltató (Paypal) adatkezelési gyakorlata ettől eltérhet. Bővebb információ a Paypal ide vonatkozó dokumentumaiban.";
const privacyLi2 = "<span class='italic'>Analitikai és készülékadatok: </span>ezen adatokat az adatkezelő kizárólag statisztikai adatként tárolja, és statisztikák készítésére, illetve a felhasználói élmény javítására használja fel.";
const privacyLi3 = "<span class='italic'>Sütik: </span>a sütiket (cookie) az adatkezelő a gördülékeny és hatásos felhasználói élmény érdekében használja. Sütiket helyezhetnek el harmadik félhez tartozó szolgáltatások is, például a Paypal fizetési szolgáltató, valamint a Google Analytics. Bővebb információ ezen szolgáltatók weboldalán található.";
const privacyLi4 = "<span class='italic'>Belépési adatok: </span>a honlapra regisztrációnál megadott adatokat az adatkezelő a későbbi belépések során a felhasználó azonosítására használja, és bizalmasan kezeli.";
const privacyLi5 = "<span class='italic'>Csatlakozás a DC-hez: </span>a csatlakozási kérés küldésekor a felhasználó által megadott adatokat az adatkezelő az új taggal való kommunikáció megkezdésére és fenntartására használja, és bizalmasan kezeli.";
const privacyT5 = "5. Az adatkezelés időtartama";
const privacyP12 = "A felhasználó a készülékén tárolt sütiket a böngészőjében bármikor törölheti. A törlés menete megtalálható a böngészőhöz kiadott Súgóban.";
const privacyP13 = "A DC támogatásához megadott adatokat a maga részéről (a PayPal rendszerében eltérő lehet), a támogatás összegének kivételével az adatkezelő harminc napon belül megsemmisíti.";
const privacyP14 = "A DC-hez való csatlakozáshoz, illetve az oldalra való belépéshez szükséges adatokat az adatkezelő addig tárolja, amíg a felhasználó azokról másként nem rendelkezik vagy a hozzájárulását vissza nem vonja.";
const privacyT6 = "6. Az adatokhoz hozzáférők köre, adatfeldolgozók";
const privacyP15 = "A felhasználók által megadott, valamint a technikai működés során automatikusan megismert adatokhoz kizárólag az adatkezelő fejlesztő csoportjának tagjai férnek hozzá. Az automatikusan generált adatokhoz adatfeldolgozóként a Google Analytics is hozzáfér.";
const privacyP16 = "Személyes adatokat az adatkezelő harmadik félnek nem ad át, kivéve, ha a felhasználó olyan célból adta meg. Így támogatás esetén a pénzügyi szolgáltatók hozzáférhetnek bizonyos személyes adatokhoz.";
const privacyP17 = "A felhasználó a megadott adatokat bármikor módosíthatja, kivéve a DC-hez való csatlakozásnál megadott álnevet és ímél címet. A nem változtatható adatok törlésére természetesen lehetőség van, ám ez technikailag csak a DC-ből való kilépéssel lehetséges, mivel a DC a felhasználóval kizárólagosan az először megadott kapcsolati címen tudja tartani a kapcsolatot.";
const privacyT7 = "7. Az érintettek személyes adataik kezelésével kapcsolatos jogai";
const privacyTt5 = "7.1. Hozzáférés";
const privacyP18 = "Személyes adataik kezeléséről minden érintett tájékoztatást kérhet elektronikus levél útján, amennyiben személyazonosságát kielégítő módon igazolni tudja, hogy csak a jogosult személynek szolgáltassunk ki információkat. Az adatkezelő a kérésre 30 napon belül elektronikus levél útján tájékoztatást ad az érintettnek. A tájékoztatás a <a href='mailto:democrable@gmail.com'>democrable@gmail.com</a> ímél címen kérhető.";
const privacyTt6 = "7.2. Helyesbítés és törlés";
const privacyP19 = "Az érintettek elektronikus levél útján kérhetik a személyes adataik, kivéve a DC-hez való csatlakozáskor megadott adataik, (vagy azok egy részének) módosítását. Az oldalra való belépéshez használt adatok módosítása bejelentkezés után a megfelelő menüpont választása (jelszó megváltoztatása) után érhető el. Az érintettek azonos módon kérhetik személyes adataik (vagy azok egy része) törlését.";
const privacyP20 = "Ezen kéréseknek az adatkezelő a lehetséges legrövidebb időn, de maximum 30 napon belül eleget tesz és erről visszajelzést küld a felhasználónak. Törlés abban az esetben lehetséges, ha az érintett visszavonja az adatkezelés jogalapját képező hozzájárulását, és az adatkezelésnek nincs más jogalapja.";
const privacyTt7 = "7.3. Tiltakozás";
const privacyP21 = "A felhasználók tiltakozhatnak személyes adataik kezelése ellen, ennek keretében kérhetik személyes adataik helyesbítését és törlését, amennyiben technikailag nem módosítható adatokról van szó törlését, az adatkezelő elektronikus levelezési címén.";
const privacyTt8 = "7.4. Adatok hordozhatósága";
const privacyP22 = "Az érintettek elektronikus levél útján kérhetik az általuk az adatkezelő rendelkezésére bocsátott személyes adataik rendelkezésre bocsátását, géppel olvasható formátumban (tömörített pdf). Az adatkezelő a kérésnek 30 napon belül eleget tesz.";
const privacyT8 = "8. Adatbiztonsági intézkedések";
const privacyP23 = "Az adatkezelő minden tőle telhetőt megtesz a felhasználók személyes adatainak védelmében.";
const privacyP24 = "A DC szerver szolgáltatója a Namecheap, Inc.; a szerverek földrajzilag az Amerikai Egyesült Államokban helyezkednek el, és megfelelnek az ott hatályos biztonsági előírásoknak.";
const privacyP25 = "Namecheap, Inc.";
const privacyP26 = "4600 East Washington Street, Suite 305; Phoenix, AZ 85034, USA";
const privacyT9 = "9. Jogérvényesítési lehetőségek";
const privacyP27 = "Kérjük a felhasználókat, amennyiben úgy érzik, hogy a DC megsértette személyes adataikhoz fűződő jogaikat, akkor vegyék fel a DC-vel a kapcsolatot, hogy az esetleges sérelmet orvosolhassuk.";
const privacyP28 = "Tájékoztatjuk Önöket, hogy kérhetik az adatvédelmi hatóság segítségét, valamint igényüket polgári peres eljárásban is érvényesíthetik.";
const privacyP29 = "Erre, valamint az adatkezelő kötelezettségeire vonatkozó részletes jogszabályi rendelkezéseket az Európai Parlamentnek és a Tanácsnak a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről szóló 2016/679 rendelete (2016. április 27.), az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény tartalmazza, valamint az elektronikus kereskedelmi szolgáltatások, valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről szóló 2001. évi CVIII. törvény 13/A. § tartalmazza.";
const privacyP30 = "A DC a felhasználók személyes adatait kizárólag a jelen adatvédelmi nyilatkozat és a hatályos adatvédelmi jogszabályoknak megfelelően kezeli és dolgozza fel. Az érintettnek azonban vélt sérelem esetén jogában áll a felügyeleti hatóságnál panaszt tenni.";
const privacyP31 = "Nemzeti Adatvédelmi és Információszabadság Hatóság (cím: 1125 Budapest, Szilágyi Erzsébet fasor 22/c;   tel: +36-1-391-1400; <a href='mailto:ugyfelszolgalat@naih.hu'>ugyfelszolgalat@naih.hu</a>)";
const privacyT10 = "10. Kikötés";
const privacyP32 = "Az adatkezelő fenntartja magának a jogot, hogy az adatvédelmi nyilatkozatát megváltoztassa, különösen akkor kerülhet erre sor, amennyiben a szolgáltatások köre bővül, vagy a jogszabályi környezet megváltozik.";
const privacyP33 = "Az erre vonatkozó tájékoztatást az adatkezelő a honlapján 15 nappal előre közzéteszi.";
const privacyP34 = "2018. 10. 03., Budapest";
const privacyP35 = "Democrable Community";

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
        <p dangerouslySetInnerHTML={{ __html: privacyP11 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT4 }}></h3>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: privacyLi1 }}></li>
          <li dangerouslySetInnerHTML={{ __html: privacyLi2 }}></li>
          <li dangerouslySetInnerHTML={{ __html: privacyLi3 }}></li>
          <li dangerouslySetInnerHTML={{ __html: privacyLi4 }}></li>
          <li dangerouslySetInnerHTML={{ __html: privacyLi5 }}></li>
        </ul>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT5 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP12 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP13 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP14 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT6 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP15 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP16 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP17 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT7 }}></h3>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt5 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP18 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt6 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP19 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP20 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt7 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP21 }}></p>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt8 }}></h4>
        <p dangerouslySetInnerHTML={{ __html: privacyP22 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT8 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP23 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP24 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP25 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP26 }}></p>
        <a href="https://www.namecheap.com/" target="_blank">namecheap.com</a>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT9 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP27 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP28 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP29 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP30 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP31 }}></p>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT10 }}></h3>
        <p dangerouslySetInnerHTML={{ __html: privacyP32 }}></p>
        <p dangerouslySetInnerHTML={{ __html: privacyP33 }}></p>
        <br></br>
        <p className="italic" dangerouslySetInnerHTML={{ __html: privacyP34 }}></p>
        <p id="sign" dangerouslySetInnerHTML={{ __html: privacyP35 }}></p>
      </div>
    </div>
  </Layout>
);