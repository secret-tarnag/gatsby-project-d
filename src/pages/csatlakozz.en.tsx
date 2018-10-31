import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="en" urlSlug="csatlakozz" />
    <div className="joinus-container">
      <div className="form-container" role="form">
        <h2 className="form-title barlow">Applying</h2>
        <form id="join-us-form" action="csatlakozz.html" method="post">
          <div className="tooltip">
            <p id="alias-text">alias*:</p>
            <span id="alias-tooltip" className="tooltiptext">no one will know your real name, please use an ancient greek name</span>
          </div>
          <input id="alias" type="text" name="alias" required />
          <div className="tooltip">
            <p id="email-text">e-mail*:</p>
            <span id="email-tooltip" className="tooltiptext">an e-mail address used solely for this website</span>
          </div>
          <input id="email" type="email" name="email" required />
          <p>Which area could you contribute most to?</p>
          <input id="w1" type="radio" name="worktype" value="webdeveloper" checked /><label for="w1">web development</label>
          <input id="w2" type="radio" name="worktype" value="creative" /><label for="w2">creative team</label>
          <input id="w3" type="radio" name="worktype" value="editor" /><label for="w3">content creation</label>
          <input id="w4" type="radio" name="worktype" value="administrator" /><label for="w4">administration</label>
          <input id="accept" type="checkbox" name="acceptedTermsAndConditions" required />
          <label for="accept"> I have read and agree with the <Link to="docs/adatvedelmi_nyilatkozat.pdf" target="_blank">Data Protection Declaration</Link>*.</label>
          <input type="reset" value="clear" />
          <input id="submit" type="submit" value="send" disabled />
        </form>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);