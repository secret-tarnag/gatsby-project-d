import * as React from 'react';
import Navbar from '../components/Navbar';

import './css/act.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import ScrollToTopButton from '../components/ScrollToTopButton';

const links = [
  {
    text: 'Hogy miért is van ez az oldal? ...',
    to: '/hu/cselekves#cause',
  },
  {
    text: 'Miért rossz, ami nem független? ...',
    to: '/hu/cselekves#summary',
  },
  {
    text: 'A nem igazmondás fajtái ...',
    to: '/hu/cselekves#variety',
  },
  {
    text: 'Mit tehetünk, ha nem akarunk valótlanságokat olvasni? ...',
    to: '/hu/cselekves#possibilities',
  },
];

const causeTitle = 'Hogy miért is van ez az oldal?';
const causeParagraphs = [
  <p>
    Nos, tegyük fel, hogy van egy nagyon gazdag emberünk, hívjuk Anzelmnek.
    Vagyona óriási, igazán csak ő tudja, milyen praktikák és machinációk árán
    szerezte meg. Anzelmünk az ÁPISZ -- Ártalmatlan Politikusok és Intrikusok
    Szövetsége -- nevű párt támogatója, és ami különösen jó a pártnak: emberünk
    kezében van az ország legnagyobb példányszámban eladott lapja és a
    legnézettebb tévéje. Ezt úgy nevezik, hogy nagy befolyása van a médiára.
  </p>,
  <p>
    Sajnos A. úr és pártja tisztessége és becsülete eléggé megkopott, mondhatni
    a bűnözés útjára léptek, ám az ország többi rendes lakója még csak nem is
    sejti, hogy az ÁPISZ miként garázdálkodik az általuk adóként befizetett
    pénzzel, hiszen Anzelm tévéje és újságja ilyen híreket nem közöl, valamint
    az igazság terjesztőit kémnek, hazaárulónak vagy ilyesmiknek titulálja,
    hitelteleníti.
  </p>,
  <p>
    Hogyan tudhatják meg a tisztességes polgárok, hogy mi történik? Nos, szükség
    van olyan újságokra, tévéadókra, rádiókra, online híroldalakra, melyek nem
    emberünk tulajdonai, <span className="highlight">függetlenek</span> tőle és
    a politikai szereplőktől, ezért le tudják írni mi történik{' '}
    <span className="highlight">valójában</span>.
  </p>,
  <p>
    Na igen, de honnan tudjuk meg, hogy melyik médium független?{' '}
    <span className="emphasize">Ezért van ez a honlap</span>. Itt összegyűjtjük
    nektek a különböző hírforrások politikai irányultságát, tulajdonosait és
    ezek kapcsolódását a hatalomhoz, megbízhatóságát és olvasottságát azért,
    hogy következtethessetek az esetleges torzításra, elfogultságra.
  </p>,
];

const summaryTitle =
  'Foglaljuk össze miért rossz a politikusoktól, barátaiktől és üzletfeleiktől vagy pártoktól függő média:';
const summaryParagraphs = [
  'Azért, mert - akár az öncenzúra, akár a tényleges iránytó hatás miatt - nem tudják/akarják a' +
    'híreket pártatlanul és objektíven közölni.',
];

const varietyTitle = 'A nem igazmondás fajtái:';
const varietyParagraphs = [
  <p>
    <span className="highlight">1. Torzítás:</span> "A gazdasági teljesítmény,
    köszönhetően a kormánynak már sokadik éve folyamatosan nő" (pártmédium).
    Valóság: A gazdasági teljesítmény tényleg nő, de csak tavaly óta, emellett
    viszont nő az államadósság is és a növekedés valójában sokkal kisebb, mint a
    környező országokban.
  </p>,
  <p>
    Ezzel a módszerrel a híreket egészen más színben lehet feltüntetni mint
    ahogy megtörténtek, hiszen a legtöbb esetben a történések körülményei,
    mögöttes viszonyai ugyanolyan érdekesek, mint maga a cselekmény, ami
    kontextusától megfosztva, mondhatni, elveszti az információértékét.
  </p>,
  <p>
    <span className="highlight">2. Egyszerű kihagyás/elhallgatás:</span>{' '}
    "&nbsp;&nbsp;" (pártmédium). Valóság: Letartóztattak két, a párthoz kötődő
    személyt, különböző bűncselekmények, például sikkasztás, korrupció,
    hatalommal való visszaélés miatt...
  </p>,
  <p>
    Szintén nagyon kényelmes, főleg, ha már nagyon kínos, egyszerűen nem közölni
    valamit. Persze, ha a média kellőképp plurális, akkor ezt nem nagyon lehet
    sikerrel megtenni, mert bárki el tudja olvasni olyan helyeken, ahol viszont
    megírják. Ezért eléggé veszélyes egyetlen hírforrásból tájékozódni. Honnan
    tudod, hogy mi maradt ki?
  </p>,
  <p>
    <span className="highlight">3. Hátrányos megkülönböztetés:</span>
    Tipikusan olyan esetek, mint a következő: a támogatott párt politikusát
    fél-egy oldalon keresztül mutatják be és dicsérik (mondjuk egy választás
    előtt), a többi politikusról maximum egy-két sorban emlékeznek meg, vagy még
    annyiban sem. Példák: a Csepeli Hírmondó február 22-i száma (
    <a
      href={
        'https://444.hu/2018/02/23/10-foton-szerepel-es-19-alkalommal-van-leirva-nemeth-szilard-neve-a-csepeli-ujsagban'
      }
      target="_blank"
    >
      cikk az ügyről
    </a>{' '}
    |
    <a href="docs/CSH_163_.pdf" target="_blank">
      a lapszám
    </a>
    )<br />
    Józsefváros lapja (
    <a
      href="https://merce.hu/2018/07/06/jozsefvaros-lapja-nem-tud-a-keruleti-polgarmester-valasztasrol"
      target="_blank"
    >
      cikk az ügyről
    </a>
    |
    <a href="docs/jozsefvaros_ujsag_2018-23.pdf" target="_blank">
      a lapszám
    </a>
    )
  </p>,
  <p>
    <span className="highlight">4. Pozitív dömping:</span> Ez egy nagyobb
    lélegzetű jelenség. Azon alapszik, hogy az állampolgárok nem
    elégedetlenkednek, ha nem érik el őket a rossz hírek. Ezért a médiumnak
    nincs más dolga, mint rendszeresen kizárólag a pozitív (azaz a médium által
    támogatottakra pozitív) kicsengésű és a semleges híreket közölni.
  </p>,
  <p>
    Ez a jelenség általában együtt jár azzal, hogy az ellenoldalról csak a
    negatív híreket közlik, azaz lejáratják. Természetesen csak a közéleti
    vonatkozású hírekre vonatkozik, a bulvár, a katasztrófa vagy a bűnügyi
    hírekre nem (ha nincs bennük utalás a közéleti szereplőkre), ilyen híreket
    mindenki szívesen hall (mármint az emberek többsége, érdekesnek tartja
    ezeket, eszünkbe sem jutott a kedves olvasót kárörömmel vádolni).
  </p>,
  <p>
    Példa: A közszolgálati média adásának elemzése (
    <a
      href="https://mertek.atlatszo.hu/a-szavak-ereje-manipulacios-eszkozok-a-hirszerkesztesben"
      target="_blank"
    >
      cikk az ügyről
    </a>{' '}
    |{' '}
    <a href="docs/Szúrópróba-26.pdf" target="_blank">
      az elemzés
    </a>
    )
  </p>,
  <p>
    <span className="highlight">5. Egyszerű hazugság:</span> Ahogy a kategória
    címe is jelzi, egyszerűen a szándékos (vagy vétlen), a tényekkel ellenkező
    információ terjesztését értjük ez alá.
  </p>,
  <p>
    Például azt írja egy médium, hogy a hátsó udvaron máglyán égette valaki a
    pénzt, pedig nem égette.
  </p>,
  <p>
    <span className="highlight">6. Lejárató kampányok:</span> Egy kiválasztott
    ember (aki épp elég erős ellenfélnek tűnik) tendenciózus hiteltelenítése a
    közönség szemében, személyes tulajdonságok, megtörtént események,
    nyilatkozatok alapján. Magyarországon az utóbbi időkben a minden alap
    nélküli, hazugságokat alkalmazó lejáratás terjedt el, mely hatásosabb, mint
    az addig alkalmazott technikák. Az emberek sokkal fogékonyabbak az
    álhírekre, mint az igaziakra, ezek sokkal gyorsabban terjednek a
    szenzációértékük miatt. Emellett a cáfolatuk szinte hatástalan, még ha ki is
    derül az igazság, és a közönség el is hiszi, a lejáratott közszereplő
    hitelessége már odaveszett.
  </p>,
  <p>
    <span className="highlight">7. Uszítás, gyűlöletkeltés:</span> Etnikai,
    vallási, nemi, más politikai vagy világnézeti csoport megfélemlítése vagy a
    csoport tagjai elleni erőszak, előítéletes fellépés kiváltása és az erre
    irányuló szóbeli vagy írásbeli megnyilvánulás.
  </p>,
  <p>Ez nagyon elítélendő, és mindig hazugságokon alapszik.</p>,
  <p>
    Reméljük, hogy sikerült valamennyire jól kategorizálni ezt a dolgot, annak
    ellenére, hogy a különböző fajták bizonyos mértékben fedik egymást, és
    legtöbbször a valójában halmozottan, vegyítetten fordulnak elő.
  </p>,
];

const possibilitiesTitle = 'Mit tehetünk, ha nem akarunk hülyeségeket olvasni?';
const possibilitiesParagraphs = [
  <p>A legfontosabb, hogy legyünk tudatosak.</p>,
  <p>
    <span className="emphasize">Tájékozódjunk!</span>
  </p>,
  <p>
    Nézzük meg:
    <br /> megbízható-e az adott forrás?
    <br />
    nem csak random ember facebook oldala, hanem szerkesztőséggel rendelkező
    lap/újság/tv/híroldal?
    <br />
    mit írnak róla?
    <br />
    szerepel-e valamelyik megbízható, álhíroldalakat gyüjtő listán?
    <br />
    magam hallottam-e róla?
    <br />
    kinek a tulajdona?
  </p>,
  <p>Gyűjtsünk információt az adott hírforrásról, és mérlegeljünk.</p>,
  <p>
    <span className="emphasize">Mérjük fel!</span>
  </p>,
  <p>
    Ha az előző szűrőn átment, kezdjük el olvasni, figyelmesen és egy kis
    szkepszissel. Ellenőrizzük, hogy nem ír-e nagyon másképp a többi megbízható
    médiumhoz képest. Figyeljük, hogy nem közöl-e álhíreket (vannak az
    álhíreknek bizonyos felismerhető mintázatai).
  </p>,
  <p>
    A bizalom kiépítésének nem szabad gyorsnak lennie, egy olvasás után nem
    szabad feltétel nélkül elfogadni mindent, amit írnak valahol, ez egy lassú
    folyamat.
  </p>,
  <p>
    <span className="highlight">FIGYELEM!</span> Az, hogy olyan híreket olvasunk
    valahol, ami nekünk nem "tetszik", még nem jelenti azt, hogy az adott forrás
    nem írt objektívan.
  </p>,
  <p>
    <span className="emphasize">Olvassuk!</span>
  </p>,
  <p>
    Ha találtunk független médiumot, szuper! Támogathatjuk is, mert objektívan
    írni anyagilag nem mindig kifizetődő. Viszont továbbra is legyünk tudatosak:
    egy független médiumot is bármikor felvásárolhatnak, megvehetnek; kis
    gyakorlattal az ilyenkor bekövetkező hangnemváltást meg lehet érezni, de
    inkább álljunk több lábon, olvassunk többféle független forrást!
  </p>,
];

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="hu" urlSlug="cselekves" />
    <ScrollToTopButton />
    <div className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves">Cselekdj!</h2>
    </div>
    <LinkList links={links} />
    <div id="cause" className="general-text">
      <h3 id="cause-title" dangerouslySetInnerHTML={{ __html: causeTitle }} />
      <br />
      {causeParagraphs.map(paragraph => (
        <div>
          {paragraph}
          <br />
        </div>
      ))}
    </div>
    <div id="summary" className="general-text">
      <h4
        id="summary-title"
        dangerouslySetInnerHTML={{ __html: summaryTitle }}
      />
      <br />
      {summaryParagraphs.map(paragraph => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
    <div id="variety" className="general-text">
      <h4
        id="variety-title"
        dangerouslySetInnerHTML={{ __html: varietyTitle }}
      />
      <br />
      {varietyParagraphs.map(paragraph => (
        <div>
          {paragraph}
          <br />
        </div>
      ))}
    </div>
    <div id="possibilities" className="general-text">
      <h3
        id="possibilities-title"
        dangerouslySetInnerHTML={{ __html: possibilitiesTitle }}
      />
      <br />
      {possibilitiesParagraphs.map(paragraph => (
        <div>
          {paragraph}
          <br />
        </div>
      ))}
    </div>
    <Footer lng="hu" />
  </Layout>
);
