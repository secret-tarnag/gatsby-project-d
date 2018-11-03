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
      <div className="joinus-form-container barlow" role="form">
        <h2 className="joinus-form-title">Applying</h2>
        <form id="joinus-form" action="csatlakozz.html" method="post">
          <div className="tooltip">
            <p id="alias-text">alias*:</p>
            <span id="alias-tooltip" className="tooltiptext">
              no one will know your real name, please use an ancient greek name
            </span>
          </div>
          <input id="alias" type="text" name="alias" required />
          <div className="tooltip">
            <p id="email-text">e-mail*:</p>
            <span id="email-tooltip" className="tooltiptext">
              an e-mail address used solely for this website
            </span>
          </div>
          <input id="email" type="email" name="email" required />
          <p>Which area could you contribute most to?</p>
          <input
            id="w1"
            type="radio"
            name="worktype"
            value="webdeveloper"
            checked
          />
          <label htmlFor="w1">web development</label>
          <br />
          <input id="w2" type="radio" name="worktype" value="creative" />
          <label htmlFor="w2">creative team</label>
          <br />
          <input id="w3" type="radio" name="worktype" value="editor" />
          <label htmlFor="w3">content creation</label>
          <br />
          <input id="w4" type="radio" name="worktype" value="administrator" />
          <label htmlFor="w4">administration</label>
          <br />
          <br />
          <input
            id="accept"
            type="checkbox"
            name="acceptedTermsAndConditions"
            required
          />
          <label htmlFor="accept">
            {' '}
            I have read and agree with the{' '}
            <Link to="docs/adatvedelmi_nyilatkozat.pdf" target="_blank">
              Data Protection Declaration
            </Link>
            *.
          </label>
          <br />
          <br />
          <div className="joinus-form-controls">
            <input type="reset" value="clear" />
            <input id="submit" type="submit" value="send" />
          </div>
          <div className="joinus-register-link">
            <span>
              A fenti formmal csatlakozhatsz a Democrable Communityhez. Csak
              regisztrálni akartál?{' '}
            </span>
            <span>
              <Link to="/en/regisztracio">Akkor ez az utad :)</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);
