import * as React from 'react';
import Layout from '../components/layout';
import './css/sorry.css';
import { Link } from '@reach/router';

const SorryPage = () => (
  <Layout>
    <div id="pic">
    </div>
    <div id="sorry">
      <p id="p1"><b>Kedves Felhasználó!</b><br />Lelkes csapatunk folyamatosan dolgozik a weboldal
        fejlesztésén, ám az a
			funkció,<br />melyre klikkeltél, még nem működik. Reméljük, nemsokára kész lesz.</p>
      <p id="p2">Ha lenne kedved weboldalt fejleszteni vagy közreműködni a projektben, <Link className='sorrylink' to="/hu/csatlakozz">csatlakozz</Link>
        a csapatunkhoz!<br />A fejlesztők</p>
      <p><Link className='sorrylink' to="/hu/">Vissza a címlapra</Link></p>
      <p>CreativeCommons 4.0;<br /> 2018, democrable.com</p>
    </div>
    <div className="language-button-container">
      <span className="language-button"><Link className='sorrylink' to='/hu/sorry'>HU</Link></span>
      <span className="language-button"><Link className='sorrylink' to='/en/sorry'>EN</Link></span>
    </div>
  </Layout>
);

export default SorryPage;
