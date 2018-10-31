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
      <div className="form-container" role="form">
        <h2 className="form-title">Jelentkezés</h2>
        <form id="join-us-form" action="csatlakozz.html" method="post">
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
          <input id="w1" type="radio" name="worktype" value="webdeveloper" checked /><label for="w1">webfejlesztés</label>
          <input id="w2" type="radio" name="worktype" value="creative" /><label for="w2">kreatív csapat</label>
          <input id="w3" type="radio" name="worktype" value="editor" /><label for="w3">tartalomfejlesztés</label>
          <input id="w4" type="radio" name="worktype" value="administrator" /><label for="w4">adminisztráció</label>
          <input id="accept" type="checkbox" name="acceptedTermsAndConditions" required />
          <label for="accept"> elolvastam és elfogadom az <Link to="docs/adatvedelmi_nyilatkozat.pdf" target="_blank">Adatvédelmi Nyilatkozatot</Link>*.</label>
          {/*Kell a script is*/}
          <div className="g-recaptcha" data-sitekey="6Lf1_msUAAAAAHWQFF0BQnqDgm92WVW1aR6S1PFI"></div>
          <input type="reset" value="törlés" />
          <input id="submit" type="submit" value="küldés" disabled />
        </form>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);