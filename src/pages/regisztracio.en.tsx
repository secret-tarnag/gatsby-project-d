import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="en" urlSlug="regisztracio" />
    <div className="register-container">
      <div className="joinus-form-container">
        <h2 className="joinus-form-title">Sign up</h2>
        <form className="joinus-form" action="" method="post">
          <p>username:</p>
          <input id="uname" type="text" name="uname" required />
          <p>email:</p>
          <input id="email" type="email" name="email" required />
          <p>password:</p>
          <input id="password" type="password" name="password" required />
          <p>password again:</p>
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
            I have read and agree with the{' '}
            <Link to="/en/adatvedelem" target="_blank">
              Data Protection Declaration
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
          <span>Already have an account? </span>
          <span>
            <Link to="/hu/belepes">Sign in!</Link>
          </span>
        </div>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);
