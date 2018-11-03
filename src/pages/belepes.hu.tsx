import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="hu" urlSlug="belepes" />
    <div className="joinus-background">
    </div>
    <div className="login-container">
      <div className="joinus-form-container">
        <h2 className="joinus-form-title">Belépés</h2>
        <form className="joinus-form" action="" method="post">
          <div className="tooltip">
            <p>felhasználónév:</p>
            <span className="tooltiptext">felhasználónév vagy ímélcím</span>
          </div>
          <input id="uname" type="text" name="uname" required />
          <p>jelszó:</p>
          <input id="password" type="password" name="password" required />
          <span className="joinus-small-link"><Link to="/hu/sorry">elfelejtettem a jelszavam...</Link></span><br /><br />
          <div className="joinus-form-controls">
            <Link id="cancelbtn" to="/hu/">mégse</Link>
            <input id="submit" type="submit" value="belépés" />
          </div>
        </form>
        <div className="joinus-register-link">
          <span>Nincs még fiókod? </span><span><Link to="/hu/regisztracio">Regisztrálj most!</Link></span>
        </div>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);