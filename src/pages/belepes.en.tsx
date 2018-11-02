import * as React from 'react';
import Layout from '../components/layout';
import { Link } from '@reach/router';
import ShortNavbar from '../components/ShortNavbar';
import './css/join_us.css';
import ShortFooter from '../components/ShortFooter';

export default () => (
  <Layout>
    <ShortNavbar lng="en" urlSlug="belepes" />
    <div className="login-container">
      <div className="joinus-form-container">
        <h2 className="joinus-form-title">Login</h2>
        <form className="joinus-form" action="" method="post">
          <div className="tooltip">
            <p>username:</p>
            <span className="tooltiptext">username or email adress</span>
          </div>
          <input id="uname" type="text" name="uname" required />
          <p>password:</p>
          <input id="password" type="password" name="password" required />
          <span className="joinus-small-link"><Link to="/hu/sorry">i forgot my password...</Link></span><br /><br />
          <div className="joinus-form-controls">
            <Link id="cancelbtn" to="/hu/">cancel</Link>
            <input id="submit" type="submit" value="belépés" />
          </div>
        </form>
        <div className="joinus-register-link">
          <span>Not a member yet? </span><span><Link to="/hu/regisztracio">Sign up!</Link></span>
        </div>
      </div>
    </div>
    <ShortFooter />
  </Layout>
);