import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="hu" urlSlug="csatlakozz" />
    <div className="joinus-container">
      <div className="joinus-form-container barlow" role="form">
        <h2 className="joinus-form-title">Jelentkezés</h2>
        <form className="joinus-form" action="" method="post">
          <div className="tooltip">
            <p id="alias-text">álnév*:</p>
            <span id="alias-tooltip" className="tooltiptext">az igazit nem tudja meg senki, ellenben ez nyilvános; magasabb
              érdekekből, kérjük, régi görög neveket használjatok</span>
          </div>
          <input id="alias" type="text" name="alias" required />
          <div className="tooltip">
            <p id="email-text">e-mail*:</p>
            <span id="email-tooltip" className="tooltiptext">egy külön csak erre használatos cím, lehetőleg valamelyik nyugati
					vállalattól</span>
          </div>
          <input id="email" type="email" name="email" required />
          <p>melyik területen szeretnél közreműködni?</p>
          <input id="w1" type="radio" name="worktype" value="webdeveloper" checked /><label for="w1">webfejlesztés</label><br />
          <input id="w2" type="radio" name="worktype" value="creative" /><label for="w2">kreatív csapat</label><br />
          <input id="w3" type="radio" name="worktype" value="editor" /><label for="w3">tartalomfejlesztés</label><br />
          <input id="w4" type="radio" name="worktype" value="administrator" /><label for="w4">adminisztráció</label><br /><br />
          <input id="accept" type="checkbox" name="acceptedTermsAndConditions" required />
          <label for="accept"> elolvastam és elfogadom az <Link to="docs/adatvedelmi_nyilatkozat.pdf" target="_blank">Adatvédelmi Nyilatkozatot</Link>*.</label><br /><br />
          <div className="joinus-form-controls">
            <input type="reset" value="törlés" />
            <input id="submit" type="submit" value="küldés" />
          </div>
        </form>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);