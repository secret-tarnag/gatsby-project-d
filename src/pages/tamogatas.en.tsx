import * as React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import TabNav from '../components/donate/TabNav';
import SocialMediaLinks from '../components/SocialMediaLinks';
import './css/donate.css';

export default () => (
  <Layout>
    <div className="donate-grid-container">
      <div className="comingsoon-logo-container"></div>
      <div className="donate-grid-item">
        <div className="donate-title">
          <span>Support Us!</span>
        </div>
        <div className="donate-description">
          <span id="countdown">Azért küzdünk, hogy mindenki átlátható formában hozzáférjen bármely híreket közlő médium információihoz, így erősítve a médiatudatosságot és az átláthatóságot, ezzel pedig a demokráciát.</span>
        </div>
        <div className="donate-link-container">
          <span><i className="icon material-icons">expand_more</i><a id="expand-more" onClick={() => {
            let i;
            const tablinks = document.getElementsByClassName('tablinks');

            for (i = 0; i < tablinks.length; i++) {
              tablinks[i].classList.remove('active');
            }
            const topPos = document.getElementById('contribute').offsetTop;
            document.documentElement.scrollTop = topPos - 160;
            // add an "active" class to the button that opened the tab
            document.getElementById(`contribute-button`).classList.add('active');
          }}>
            donate us.</a>
          </span>
          <div className="language-links">
            <span>
              <Link className="language-link" to="/hu/tamogatas">HU</Link>
            </span>
            <span>
              <Link className="language-link" to="/en/tamogatas">EN</Link>
            </span>
          </div>
        </div>
      </div>
    </div>

    <TabNav lng="en" />

    <div id="about" className="tabcontent">
      <h2>Who are we?</h2>
      <p>We are a group of University students, and we have an aspiring dream: we want democracy in Hungary to be truly democratic again.</p><br /><br />
    </div>
    <div id="goals" className="tabcontent">
      <h2>How do we want to achieve this?</h2>
      <p>By supporting independent and objective media and stregthening media-awareness.</p>
      <p>Someone said that an election cannot be independent if the people cannot vote freely. However, in order to vote freely, media must not influence people towards one particular decision, but rather inform in an objective and factual manner. Obviously, it is not necessarily possible to be 100% uninfluential, but there is a certain level that can be called independent and objective.</p>
      <p>We are developing a webpage, where anyone will be able to find all important information about the individual mediums: owners and their political connections, publishers, editors, number of visitors/day, ideology, reliability and level of independence. With this information, everyone will be able to find a medium that suits their ideology, while being an independent and reliable source; inform themselves through this source and hence be able to decide upon what’s best for them in the elections. In this way everyone can contribute to free democracy.</p>
      <p><Link to="/en/rolunk">More about our goals...</Link></p><br /><br />
    </div>
    <div id="contribute" className="tabcontent">
      <h2>Support us</h2>
      <p>There are multiple ways you can help us, or even contribute. Whichever you decide to choose, we will be very grateful.</p>
      <ul>
        <li>If you know how to program and have some experience in web development, fork us on <a href="https://github.com/daroczypal/project-d-."
          target="_blank">github</a>.</li>
        <li>Would you like to be part of a motivated team creating and maintaining this site? We are awaiting your
				<a href="mailto:democrable@gmail.com">email</a> with open arms.</li>
        <li>Starting a successful webpage costs quite a lot. If you have the financial means, please consider supporting us. This way we will be able to provide a wider range of better services.</li>
        <li><Link to="/en/rolunk#contribution">Other ways to help...</Link></li>
      </ul>
    </div>

    <div id="fundr">
      <div className="fundr-grid-item" id="paypal-account">
        <p>If you have a PayPal account:</p>
        <span>
          <img id="paypal-logo" alt="paypal logo" src="/assets/paypal-logo-png-22.png" />
          <a href="https://www.paypal.me/DemocrableHU" >Paypal.me</a></span>
      </div>
      <div className="fundr-grid-item" id="bank-account">
        <p>Credit or debit card:</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="5HFCSKRBMZQ2Q" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" data-border="0"
            name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" data-border="0" src="https://www.paypalobjects.com/hu_HU/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className="fundr-grid-item" id="social-media">
        <p>You are encouraged to get in touch if you would like to know more about us.</p>
        <SocialMediaLinks />
      </div>
      <div className="fundr-grid-item" id="bottom-text">
        <h2>Let democracy be independent and transparent. Support us, support independent media, support democracy.</h2>
      </div>
    </div>

    <footer id="donate-footer">
      <div id="dataprotection"><Link to="/en/adatvedelem">Data Protection</Link></div>
      <div id="license"><span>&copy; 2018; Democrable Community</span></div>
    </footer>
  </Layout>
);
