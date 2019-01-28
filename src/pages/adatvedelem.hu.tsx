import * as React from 'react';
import Layout from '../components/layout';
import Link from 'gatsby-link';

import './css/privacy.css';

export default () => (
  <Layout>
    <div className="privacy-container">
      <div className="privacy-nav">
        <Link id="backlink" to="/hu/">
          <i className="material-icons">chevron_left</i> Vissza a főoldalra
        </Link>
      </div>
      <div className="privacy-content">
        <h2 className="privacy-title">Adatvédelmi Nyilatkozat</h2>
        <p>
          A democrable.org-ot a Democrable Community (a továbbiakban DC)
          üzemelteti. A DC jelen nyilatkozatával tájékoztatja a honlap
          felhasználóit, látogatóit adatkezelési gyakorlatáról, az adatok
          védelmére tett intézkedésekről, valamint a felhasználók jogorvoslati
          lehetőségeiről.
        </p>
        <p>
          Szolgáltatásunk használatával óhatatlanul ránk bíz bizonyos adatokat.
        </p>
        <h3>1. Az adatkezelő</h3>
        <p>
          Democrable Community (e-mail:{' '}
          <a href="mailto:democrable@gmail.com">democrable@gmail.com</a>)
        </p>
        <h3>2. A kezelt adatok köre</h3>
        <p>
          Bárki látogathatja az oldalt úgy, hogy esetlegesen begyűjtött
          statisztikai információkon túlmenően személyes adatokat nem szükséges
          megadnia.
        </p>
        <h4>2.1. Sütik és elemzési információk</h4>
        <p>
          A honlap használata során automatikusan begyűjtésre kerülhetnek
          bizonyos készülékadatok, úgymint az eszköz IP-címe (anonimizáltan), a
          böngésző típusa és verziója és a képernyő paraméterei, valamint
          rendszeranalitikához használt elemzési adatok.
        </p>
        <p>
          A gördülékeny felhasználói élmény biztosításához, és a rendes
          működéshez az adatkezelő cookiekat tárolhat a felhasználó
          böngészőjében.
        </p>
        <table>
          <tr>
            <th>Süti neve</th>
            <th>Elhelyező</th>
            <th>Süti célja</th>
          </tr>
          <tr>
            <td>PYPF</td>
            <td>paypalobjects.com</td>
            <td>Paypal adakozási gomb működés</td>
          </tr>
          <tr>
            <td>_ga</td>
            <td>democrable.org</td>
            <td>Google Analytics azonosító</td>
          </tr>
          <tr>
            <td>_gat_gtag_UA_*</td>
            <td>democrable.org</td>
            <td>Google Analytics azonosító</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>democrable.org</td>
            <td>Google Analytics mérések</td>
          </tr>
        </table>
        <p>
          A sütik nem mind a DC által kibocsátottak vagy kezeltek, ezért
          lehetséges, hogy jelen nyilatkozatban foglaltaktól eltérő a kezelésük.
          További információk a sütik kibocsátói által megadott dokumentumokban:
        </p>
        <span>
          <a href="https://policies.google.com/technologies" target="_blank">
            Google Analytics
          </a>
        </span>
        <span>
          <a
            href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full"
            target="_blank"
          >
            Paypal
          </a>
        </span>
        <h4>2.2. Regisztráció</h4>
        <p>
          Lehetőség van a honlapra regisztrációra, ennek során meg kell adni a
          felhasználó teljes nevét, ímél címét és egy azonosító jelszó párost,
          mely tárolódik a DC rendszerében.
        </p>
        <h4>2.3. Csatlakozás</h4>
        <p>
          A DC-hez való csatlakozáskor a felhasználónak meg kell adnia egy
          álnevet és egy ímél címet, melyet a DC a csatlakozott taggal való
          kommunikáció lehetővé tételéhez nyilvántart.
        </p>
        <h4>2.4. Támogatás</h4>
        <p>
          Amennyiben Ön támogatja a DC-t az oldalon elérhető PayPal online
          fizetési rendszeren keresztül, a DC kezelésébe kerülhet neve, a
          támogatás összege, bankszámlaszáma és a tranzakció ideje. Ezen
          információkat a DC nem teszi nyilvánosan elérhetővé és harminc nap
          elteltével, a támogatási összeg kivételével, melyet statisztikai
          célokra használunk, törli. További információkért és a Paypal
          adatkezelési gyakorlatáról olvassa el a PayPal vonatkozó
          dokumentumait:
        </p>
        <ul>
          <li>
            <a
              href="https://www.paypal.com/hu/webapps/mpp/ua/privacy-full"
              target="_blank"
            >
              Adatvédelmi Nyilatkozat
            </a>
          </li>
          <li>
            <a
              href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full"
              target="_blank"
            >
              Sütik és nyomonkövetési technológiák
            </a>
          </li>
        </ul>
        <h3>3. Az adatkezelés jogalapja</h3>
        <p>
          A honlap használatához megadott vagy használata során begyűjtött
          adatok kezelésének, illetve a cookiek tárolásának jogalapja a
          felhasználó önkéntes hozzájárulása jelen tájékoztató ismeretében,
          melyről a felhasználó a honlap első használata során kap
          tájékoztatást.
        </p>
        <h3>4. Az adatkezelés céljai</h3>
        <ul>
          <li>
            <span className="italic">Támogatás: </span>A tevékenység során
            megadott személyes adatok kezelésének célja a szolgáltató és az
            érintett közötti zavartalan kommunikáció biztosítása. A személyes
            adatokat a DC eltérő célra nem használja, bizalmasan kezeli,
            valamint a támogatás statisztikai célokra felhasznált összegén kívül
            harminc napon belül törli. A Fizetési szolgáltató (Paypal)
            adatkezelési gyakorlata ettől eltérhet. Bővebb információ a Paypal
            ide vonatkozó dokumentumaiban.
          </li>
          <li>
            <span className="italic">Analitikai és készülékadatok: </span>
            ezen adatokat az adatkezelő kizárólag statisztikai adatként tárolja,
            és statisztikák készítésére, illetve a felhasználói élmény
            javítására használja fel.
          </li>
          <li>
            <span className="italic">Sütik: </span>a sütiket (cookie) az
            adatkezelő a gördülékeny és hatásos felhasználói élmény érdekében
            használja. Sütiket helyezhetnek el harmadik félhez tartozó
            szolgáltatások is, például a Paypal fizetési szolgáltató, valamint a
            Google Analytics. Bővebb információ ezen szolgáltatók weboldalán
            található.
          </li>
          <li>
            <span className="italic">Belépési adatok: </span>a honlapra
            regisztrációnál megadott adatokat az adatkezelő a későbbi belépések
            során a felhasználó azonosítására használja, és bizalmasan kezeli.
          </li>
          <li>
            <span className="italic">Csatlakozás a DC-hez: </span>a csatlakozási
            kérés küldésekor a felhasználó által megadott adatokat az adatkezelő
            az új taggal való kommunikáció megkezdésére és fenntartására
            használja, és bizalmasan kezeli.
          </li>
        </ul>
        <h3>5. Az adatkezelés időtartama</h3>
        <p>
          A felhasználó a készülékén tárolt sütiket a böngészőjében bármikor
          törölheti. A törlés menete megtalálható a böngészőhöz kiadott Súgóban.
        </p>
        <p>
          A DC támogatásához megadott adatokat a maga részéről (a PayPal
          rendszerében eltérő lehet), a támogatás összegének kivételével az
          adatkezelő harminc napon belül megsemmisíti.
        </p>
        <p>
          A DC-hez való csatlakozáshoz, illetve az oldalra való belépéshez
          szükséges adatokat az adatkezelő addig tárolja, amíg a felhasználó
          azokról másként nem rendelkezik vagy a hozzájárulását vissza nem
          vonja.
        </p>
        <h3>6. Az adatokhoz hozzáférők köre, adatfeldolgozók</h3>
        <p>
          A felhasználók által megadott, valamint a technikai működés során
          automatikusan megismert adatokhoz kizárólag az adatkezelő fejlesztő
          csoportjának tagjai férnek hozzá. Az automatikusan generált adatokhoz
          adatfeldolgozóként a Google Analytics is hozzáfér.
        </p>
        <p>
          Személyes adatokat az adatkezelő harmadik félnek nem ad át, kivéve, ha
          a felhasználó olyan célból adta meg. Így támogatás esetén a pénzügyi
          szolgáltatók hozzáférhetnek bizonyos személyes adatokhoz.
        </p>
        <p>
          A felhasználó a megadott adatokat bármikor módosíthatja, kivéve a
          DC-hez való csatlakozásnál megadott álnevet és ímél címet. A nem
          változtatható adatok törlésére természetesen lehetőség van, ám ez
          technikailag csak a DC-ből való kilépéssel lehetséges, mivel a DC a
          felhasználóval kizárólagosan az először megadott kapcsolati címen
          tudja tartani a kapcsolatot.
        </p>
        <h3>
          7. Az érintettek személyes adataik kezelésével kapcsolatos jogai
        </h3>
        <h4>7.1. Hozzáférés</h4>
        <p>
          Személyes adataik kezeléséről minden érintett tájékoztatást kérhet
          elektronikus levél útján, amennyiben személyazonosságát kielégítő
          módon igazolni tudja, hogy csak a jogosult személynek szolgáltassunk
          ki információkat. Az adatkezelő a kérésre 30 napon belül elektronikus
          levél útján tájékoztatást ad az érintettnek. A tájékoztatás a{' '}
          <a href="mailto:democrable@gmail.com">democrable@gmail.com</a> ímél
          címen kérhető.
        </p>
        <h4>7.2. Helyesbítés és törlés</h4>
        <p>
          Az érintettek elektronikus levél útján kérhetik a személyes adataik,
          kivéve a DC-hez való csatlakozáskor megadott adataik, (vagy azok egy
          részének) módosítását. Az oldalra való belépéshez használt adatok
          módosítása bejelentkezés után a megfelelő menüpont választása (jelszó
          megváltoztatása) után érhető el. Az érintettek azonos módon kérhetik
          személyes adataik (vagy azok egy része) törlését.
        </p>
        <p>
          Ezen kéréseknek az adatkezelő a lehetséges legrövidebb időn, de
          maximum 30 napon belül eleget tesz és erről visszajelzést küld a
          felhasználónak. Törlés abban az esetben lehetséges, ha az érintett
          visszavonja az adatkezelés jogalapját képező hozzájárulását, és az
          adatkezelésnek nincs más jogalapja.
        </p>
        <h4>7.3. Tiltakozás</h4>
        <p>
          A felhasználók tiltakozhatnak személyes adataik kezelése ellen, ennek
          keretében kérhetik személyes adataik helyesbítését és törlését,
          amennyiben technikailag nem módosítható adatokról van szó törlését, az
          adatkezelő elektronikus levelezési címén.
        </p>
        <h4>7.4. Adatok hordozhatósága</h4>
        <p>
          Az érintettek elektronikus levél útján kérhetik az általuk az
          adatkezelő rendelkezésére bocsátott személyes adataik rendelkezésre
          bocsátását, géppel olvasható formátumban (tömörített pdf). Az
          adatkezelő a kérésnek 30 napon belül eleget tesz.
        </p>
        <h3>8. Adatbiztonsági intézkedések</h3>
        <p>
          Az adatkezelő minden tőle telhetőt megtesz a felhasználók személyes
          adatainak védelmében.
        </p>
        <p>
          A DC szerver szolgáltatója a Namecheap, Inc.; a szerverek földrajzilag
          az Amerikai Egyesült Államokban helyezkednek el, és megfelelnek az ott
          hatályos biztonsági előírásoknak.
        </p>
        <p>Namecheap, Inc.</p>
        <p>4600 East Washington Street, Suite 305; Phoenix, AZ 85034, USA</p>
        <a href="https://www.namecheap.com/" target="_blank">
          namecheap.com
        </a>
        <h3>9. Jogérvényesítési lehetőségek</h3>
        <p>
          Kérjük a felhasználókat, amennyiben úgy érzik, hogy a DC megsértette
          személyes adataikhoz fűződő jogaikat, akkor vegyék fel a DC-vel a
          kapcsolatot, hogy az esetleges sérelmet orvosolhassuk.
        </p>
        <p>
          Tájékoztatjuk Önöket, hogy kérhetik az adatvédelmi hatóság segítségét,
          valamint igényüket polgári peres eljárásban is érvényesíthetik.
        </p>
        <p>
          Erre, valamint az adatkezelő kötelezettségeire vonatkozó részletes
          jogszabályi rendelkezéseket az Európai Parlamentnek és a Tanácsnak a
          természetes személyeknek a személyes adatok kezelése tekintetében
          történő védelméről és az ilyen adatok szabad áramlásáról, valamint a
          95/46/EK rendelet hatályon kívül helyezéséről szóló 2016/679 rendelete
          (2016. április 27.), az információs önrendelkezési jogról és az
          információszabadságról szóló 2011. évi CXII. törvény tartalmazza,
          valamint az elektronikus kereskedelmi szolgáltatások, valamint az
          információs társadalommal összefüggő szolgáltatások egyes kérdéseiről
          szóló 2001. évi CVIII. törvény 13/A. § tartalmazza.
        </p>
        <p>
          A DC a felhasználók személyes adatait kizárólag a jelen adatvédelmi
          nyilatkozat és a hatályos adatvédelmi jogszabályoknak megfelelően
          kezeli és dolgozza fel. Az érintettnek azonban vélt sérelem esetén
          jogában áll a felügyeleti hatóságnál panaszt tenni.
        </p>
        <p>
          Nemzeti Adatvédelmi és Információszabadság Hatóság (cím: 1125
          Budapest, Szilágyi Erzsébet fasor 22/c; tel: +36-1-391-1400;{' '}
          <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>)
        </p>
        <h3>10. Kikötés</h3>
        <p>
          Az adatkezelő fenntartja magának a jogot, hogy az adatvédelmi
          nyilatkozatát megváltoztassa, különösen akkor kerülhet erre sor,
          amennyiben a szolgáltatások köre bővül, vagy a jogszabályi környezet
          megváltozik.
        </p>
        <p>
          Az erre vonatkozó tájékoztatást az adatkezelő a honlapján 15 nappal
          előre közzéteszi.
        </p>
        <br />
        <p className="italic">2018. 10. 03., Budapest</p>
        <p id="sign">Democrable Community</p>
        <br />
      </div>
    </div>
  </Layout>
);
