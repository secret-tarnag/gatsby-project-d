import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import { Link } from '@reach/router';
import './css/about_us.css';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default () => (
  <Layout>
    <Navbar id="" lng="hu" urlSlug="rolunk" isHomePage={false} />
    <div className="about_main barlow" id="heading">
      <h2 id="heading-title">Rólunk</h2>
    </div>
    <div className="barlow local-nav">
      <span>
        <a href="#introduction">bemutatkozás</a>
      </span>
      <span>
        <a href="#contribution">önkéntesség</a>
      </span>
      <span>
        <a href="#privacy">adatvédelem</a>
      </span>
      <span>
        <a href="#contactinfo">elérhetőségek</a>
      </span>
      <span>
        <a href="#contributors">impresszum</a>
      </span>
    </div>
    <div className="general-text" id="introduction">
      <h2>Bemutatkozás</h2>
      <br />
      <span className="emphasize">Kik vagyunk mi?</span>
      <br />
      <p>
        Pár fiatal, egyetemista, akiknek elegük van. Húha, ez nagyon harciasra
        sikerült. Azért nem kell megijedni tőlünk, nem terveztünk zavarogni vagy
        ilyesmi. Magyarországon amúgy sem szoktak sikerülni az elnyomó csoportok
        elleni forradalmak (lásd a korábbi példákat).
      </p>
      <br />
      <br />
      <span className="emphasize">Mit szeretnénk?</span>
      <br />
      <p>
        Szabad médiát!
        <br /> Valaki mondta, hogy a választás nem lehet szabad, ha az emberek
        nem dönthetnek szabadon. A szabad döntéshez azonban szükség van arra,
        hogy a média ne befolyásolja az embereket, hanem hitelesen, tényszerűen
        tájékoztassa. Nyilván nem lehet teljesen semlegesnek lenni - az akkor
        lenne, ha nem is írnának egy szót sem - de el lehet érni azt a szintet,
        amit független és objektív újságírásnak lehet nevezni.
      </p>
      <br />
      <br />
    </div>
    <div className="general-text" id="contribution">
      <h2>Önkéntesség</h2>
      <br />
      <p>
        Ha úgy érzed, segítenél a magyar demokráciának az maradni, aminek kell,
        és ebben a honlapban (szervezetben?) láttad meg a fantáziát vagy a
        tökéletes eszközt célod eléréséhez, több lehetőség közül választhatsz,
        hogy támogass minket (mindegyiket hálás szívvel fogadjuk).
      </p>
      <ul className="indention">
        <li>Írd meg a véleményed az oldalról és küldd el nekünk.</li>
        <li>
          Ha elavult, téves vagy hiányzó információt találsz írd meg az{' '}
          <a className="about-links" href="#contactinfo">
            alábbi módok
          </a>{' '}
          egyikén, igyekszünk frissíteni, javítani, kiegészíteni.
        </li>
        <li>
          Ha programozó lennél, akkor ahogy az angol mondja:{' '}
          <a
            className="about-links"
            href="https://github.com/daroczypal/project-d-."
            target="_blank"
          >
            Fork us on GitHub
          </a>
          .
        </li>
        <li>
          Kedved lenne az első vonalból szemlélni, sőt alakítani a dolgokat?{' '}
          <Link className="about-links" to="/hu/csatlakozz">
            Csatlakozz
          </Link>{' '}
          hozzánk!
        </li>
      </ul>
    </div>
    <div className="general-text" id="privacy">
      <h2>Adatvédelem</h2>
      <br />
      <p>
        Kérünk titeket, olvassátok el az{' '}
        <a href="/hu/adatvedelem" target="_blank">
          Adatvédelmi Nyilatkozatot
        </a>
        .
      </p>
      <h4>Forráskód</h4>
      <p>
        Egyébként a weboldal{' '}
        <a
          className="about-links"
          href="https://github.com/daroczypal/project-d-."
          target="_blank"
        >
          forráskódját
        </a>
        bárki ellenőrizheti a GitHubon.
      </p>
    </div>
    <div className="general-text" id="contactinfo">
      <h2>Elérhetőségeink</h2>
      <p>
        E-mail: <a href="mailto:democrable@gmail.com">democrable@gmail.com</a>
        <br />
        Ezt biztosan elolvassuk, és válaszolunk. De ha valaki nem szeretne ímélt
        küldeni, akkor megfontolhatja, hogy az alábbi formmal küld nekünk
        üzenetet vagy valamelyik közösségi oldalon:
      </p>
      <span className="rolunk-sm-span">
        <SocialMediaLinks />
      </span>
      <div id="get-mbb-container">
        <button
          id="get-messagebox-button"
          className="barlow"
          name="get-messagebox-button"
          type="button"
        >
          direkt üzenetet küldök
        </button>
      </div>
    </div>
    <div className="contact-form-container" id="contact-form">
      <div className="title-container">
        <h3 id="contact-form-title" className="barlow">
          Üzenj nekünk közvetlenül innen:
        </h3>
      </div>
      <div className="label-container">
        <p id="name-label" className="barlow form-text">
          Név:
        </p>
        <p id="email-label" className="barlow form-text">
          E-mail:
        </p>
        <p id="subject-label" className="barlow form-text">
          Tárgy:
        </p>
        <p id="message-label" className="barlow form-text">
          Üzenet:
        </p>
      </div>
      <div className="input-container" role="form">
        <span className="close">&times;</span>
        <form id="form" action="rolunk.html" method="post">
          <input
            id="name"
            className="barlow form-field"
            type="text"
            name="name"
            required
          />
          <input
            id="email"
            className="barlow form-field"
            type="email"
            name="email"
            required
          />
          <input
            id="subject"
            className="barlow form-field"
            type="text"
            name="subject"
            required
          />
          <br />
          <textarea
            id="message"
            className="barlow form-field"
            name="message"
            rows={1}
            cols={100}
            required
          />
          <input
            id="submit-button"
            className="barlow"
            type="submit"
            value="küldés"
          />
        </form>
      </div>
    </div>
    <div id="message-sent">
      <span className="barlow">Az üzenet sikeresen elküldve.</span>
      <span className="close">&times;</span>
    </div>
    <div id="message-error">
      <span className="barlow">Hiba történt. Az üzenet nem lett elküldve.</span>
      <span className="close">&times;</span>
    </div>
    <div className="contributors" id="contributors">
      <div id="left" className="grid-item barlow">
        <div className="grid-item-center">
          <h3 className="bold inline">Impresszum</h3>
          <p className="inline">&nbsp;- közreműködők, írók, fejlesztők:</p>
          <p className="indention">webfejlesztés: Démokritosz, Hermész</p>
          <p className="indention">tartalom, dizájn: Lakedaimón</p>
          <p className="indention">fotó: </p>
          <p className="license">
            2017-2018;{' '}
            <img
              className="cc"
              id="cc-about"
              alt="Creative Commons"
              src="/assets/cc.svg"
            />{' '}
            by-nc-sa 4.0
          </p>
        </div>
      </div>
      <div id="right" className="grid-item icon-container" />
    </div>
  </Layout>
);
