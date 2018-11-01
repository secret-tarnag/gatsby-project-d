import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="hu" urlSlug="belepes" />
    <div className="login-container">
      <div className="joinus-form-container">
        <h2 className="joinus-form-title">Belépés</h2>
        <form className="joinus-form" action="" method="post">
          <p>felhasználónév:</p>
          <input id="uname" type="text" name="uname" required />
          <p>jelszó:</p>
          <input id="password" type="password" name="password" required />
          <div className="joinus-form-controls">
            <Link id="cancelbtn" to="/hu/">mégse</Link>
            <input id="submit" type="submit" value="küldés" />
          </div>
        </form>
        <span><Link to="/hu/regisztracio">regisztrálok</Link></span>
        <span><Link to="/hu/sorry">elfelejtettem a jelszamam...</Link></span>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);