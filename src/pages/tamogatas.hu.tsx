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
          <span>Támogasd a Democrable-t!</span>
        </div>
        <div className="donate-description">
          <span id="countdown"></span>
        </div>
        <div className="donate-link-container">
          <span><i className="icon material-icons">expand_more</i><a id="expand-more">
            támogasd az indulásunkat.</a>
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

    <TabNav />

    <div id="about" className="tabcontent">
      <h2>Kik vagyunk?</h2>
      <p>Egy egyetemistákból álló csoport, és van egy nagy álmunk: azt kívánjuk, hogy a demokrácia
        Magyarországon újra
			igazán demokratikus legyen.</p><br /><br />
    </div>
    <div id="goals" className="tabcontent">
      <h2>Hogyan szeretnénk ezt elérni?</h2>
      <p>A független és objektív média támogatásával és a médiatudatosság erősítésével.</p>
      <p>Valaki mondta, hogy a választás nem lehet szabad, ha az emberek nem dönthetnek szabadon. A szabad
        döntéshez
        azonban szükség van arra, hogy a média ne befolyásolja az embereket, hanem hitelesen, tényszerűen tájékoztassa.
        Nyilván nem lehet teljesen
        semlegesnek lenni - az akkor lenne, ha nem is írnának egy szót sem - de el lehet érni azt a szintet, amelyet
        független és
			objektív újságírásnak lehet nevezni.</p>
      <p>Egy honlapot fejlesztünk, ahol az érdeklődők megtalálhatnak minden fontos információt az egyes
        médiumokról:
        tulajdonosok és politikai kötődéseik, szerkesztők, látogatottsági adatok, világnézet és ideológiai elköteleződés,
        szavahihetőség és függetlenség. Ezen információk segítségével bárki képes lesz megtalálni a világnézetéhez illő,
        objektív, tényeket közlő hírforrásokat, az általuk szolgáltatott tartalom segítségével pedig képes lesz dönteni,
			képes lesz felismerni és gyakorolni jogait, kiállni a jó ügyek mellett.</p><br /><br />
    </div>
    <div id="contribute" className="tabcontent">
      <h2>Támogass minket!</h2>
      <p>Sokféleképp tudsz segíteni nekünk, legyen a mód bármelyik, nagyon hálásak leszünk:</p>
      <ul>
        <li>Ha tudsz programozni, és jártas vagy a webes technológiákban, akkor forkolj minket a <a href="https://github.com/daroczypal/project-d-."
          target="_blank">githubon</a>.</li>
        <li>Kedved lenne ahhoz a lelkes csapathoz tartozni, amelyik ezt az oldalt készíti? Tárt karokkal
				<a href="mailto:democrable@gmail.com">várunk</a>.</li>
        <li>Egy honlap beindítása rengeteg költséggel jár. Támogass minket, hogy jobb, színvonalasabb és
          bővebb szolgáltatásokat nyújthassunk.</li>
      </ul>
    </div>

    <div id="fundr">
      <div className="fundr-grid-item" id="paypal-account">
        <p>Paypal fiókkal:</p>
        <span><img id="paypal-logo" alt="paypal logo" src="/assets/paypal-logo-png-22.png" /><a href="https://www.paypal.me/DemocrableHU" >Paypal.me</a></span>
      </div>
      <div className="fundr-grid-item" id="bank-account">
        <p>Bankkártyával:</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="5HFCSKRBMZQ2Q" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit"
            alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/hu_HU/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
      <div className="fundr-grid-item" id="social-media">
        <p>Lépj velünk kapcsolatba, és tudj meg rólunk többet:</p>
        <SocialMediaLinks />
      </div>
      <div className="fundr-grid-item" id="bottom-text">
        <h2>Legyen a demokráciában szabadság, átláthatóság. Támogass minket, támogasd a független médiát,
          támogasd a demokráciát.</h2>
      </div>
    </div>

    <footer id="donate-footer">
      <div id="dataprotection"><Link to="/hu/adatvedelem">Adatvédelem</Link></div>
      <div id="license"><span>&copy; 2018; Democrable Community</span></div>
    </footer>
  </Layout>
);