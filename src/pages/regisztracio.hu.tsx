import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="hu" urlSlug="regisztracio" />
    <div className="register-container">
      <div className="joinus-form-container">
        <h2 className="joinus-form-title">Regisztráció</h2>
        <form className="joinus-form" action="" method="post">
          <p>felhasználónév:</p>
          <input id="uname" type="text" name="uname" required />
          <p>ímélcím:</p>
          <input id="email" type="email" name="email" required />
          <p>jelszó:</p>
          <input id="password" type="password" name="password" required />
          <p>jelszó újra:</p>
          <input id="verifypsw" type="password" name="verifypsw" required />
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
            elolvastam és elfogadom az{' '}
            <Link to="/hu/adatvedelem" target="_blank">
              Adatvédelmi Nyilatkozatot
            </Link>
            *.
          </label>
          <br />
          <br />
          <div className="joinus-form-controls">
            <input type="reset" value="törlés" />
            <input id="submit" type="submit" value="küldés" />
          </div>
        </form>
        <div className="joinus-register-link">
          <span>Már van fiókod? </span>
          <span>
            <Link to="/hu/belepes">Jelentkezz be!</Link>
          </span>
        </div>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);
