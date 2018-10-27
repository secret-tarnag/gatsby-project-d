import * as React from 'react';
import Layout from '../components/layout';

import './css/privacy.css';

const privacyTitle = '';
const privacyP1 = '';
const privacyP2 = '';
const privacyT1 = '';
const privacyP3 = '';
const privacyT2 = '';
const privacyP4 = '';
const privacyTt1 = '2.1.';
const privacyP5 = '';
const privacyP6 = '';
const privacyTH1 = 'Cookie name';
const privacyTH2 = '';
const privacyTH3 = '';
const privacyP7 = '';
const privacyTt2 = '2.2.';
const privacyP8 = '';
const privacyTt3 = '2.3.';
const privacyP9 = '';
const privacyTt4 = '2.4.';
const privacyP10 = '';
const privacyT3 = '3.';
const privacyP11 = '';
const privacyT4 = '4.';
const privacyLi1 = "<span class='italic'>Donation: </span>";
const privacyLi2 = "<span class='italic'></span>";
const privacyLi3 = "<span class='italic'>Cookies: </span>";
const privacyLi4 = "<span class='italic'></span>";
const privacyLi5 = "<span class='italic'></span>";
const privacyT5 = '5.';
const privacyP12 = '';
const privacyP13 = '';
const privacyP14 = '';
const privacyT6 = '6.';
const privacyP15 = '';
const privacyP16 = '';
const privacyP17 = '';
const privacyT7 = '7.';
const privacyTt5 = '7.1.';
const privacyP18 = '';
const privacyTt6 = '7.2.';
const privacyP19 = '';
const privacyP20 = '';
const privacyTt7 = '7.3.';
const privacyP21 = '';
const privacyTt8 = '7.4.';
const privacyP22 = '';
const privacyT8 = '8.';
const privacyP23 = '';
const privacyP24 = '';
const privacyP25 = 'Namecheap, Inc.';
const privacyP26 =
  '4600 East Washington Street, Suite 305; Phoenix, AZ 85034, USA';
const privacyT9 = '9.';
const privacyP27 = '';
const privacyP28 = '';
const privacyP29 = '';
const privacyP30 = '';
const privacyP31 =
  "Nemzeti Adatvédelmi és Információszabadság Hatóság (cím: 1125 Budapest, Szilágyi Erzsébet fasor 22/c;   tel: +36-1-391-1400; <a href='mailto:ugyfelszolgalat@naih.hu'>ugyfelszolgalat@naih.hu</a>)";
const privacyT10 = '10.';
const privacyP32 = '';
const privacyP33 = '';
const privacyP34 = '2018. 10. 03., Budapest';
const privacyP35 = 'Democrable Community';

const trs = [
  {
    td1: 'PYPF',
    td2: 'paypalobjects.com',
    td3: '',
  },
  {
    td1: '_ga',
    td2: 'democrable.org',
    td3: 'Google Analytics id',
  },
  {
    td1: '_gat_gtag_UA_*',
    td2: 'democrable.org',
    td3: 'Google Analytics id',
  },
  {
    td1: '_gid',
    td2: 'democrable.org',
    td3: '',
  },
];

export default () => (
  <Layout>
    <div className="privacy-container">
      <div className="privacy-nav">
        <a id="backlink" href="/en/">
          <i className="material-icons">chevron_left</i> Back to homepage
        </a>
      </div>
      <div className="privacy-content">
        <h2
          className="privacy-title"
          dangerouslySetInnerHTML={{ __html: privacyTitle }}
        />
        <p dangerouslySetInnerHTML={{ __html: privacyP1 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP2 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT1 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP3 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT2 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP4 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt1 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP5 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP6 }} />
        <table>
          <tr>
            <th dangerouslySetInnerHTML={{ __html: privacyTH1 }} />
            <th dangerouslySetInnerHTML={{ __html: privacyTH2 }} />
            <th dangerouslySetInnerHTML={{ __html: privacyTH3 }} />
          </tr>
          {trs.map(tr => (
            <tr>
              <td>{tr.td1}</td>
              <td>{tr.td2}</td>
              <td>{tr.td3}</td>
            </tr>
          ))}
        </table>
        <p dangerouslySetInnerHTML={{ __html: privacyP7 }} />
        <span>
          <a href="https://policies.google.com/technologies" target="_blank">
            Google Analytics
          </a>
        </span>
        <span>
          <a
            href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full"
            target="_blank"
          >
            Paypal
          </a>
        </span>
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt2 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP8 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt3 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP9 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt4 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP10 }} />
        <ul>
          <li>
            <a
              href="https://www.paypal.com/hu/webapps/mpp/ua/privacy-full"
              target="_blank"
              dangerouslySetInnerHTML={{ __html: privacyTitle }}
            />
          </li>
          <li>
            <a
              href="https://www.paypal.com/hu/webapps/mpp/ua/cookie-full"
              target="_blank"
            >
              Cookies and tracking technologies
            </a>
          </li>
        </ul>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT3 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP11 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT4 }} />
        <ul>
          <li dangerouslySetInnerHTML={{ __html: privacyLi1 }} />
          <li dangerouslySetInnerHTML={{ __html: privacyLi2 }} />
          <li dangerouslySetInnerHTML={{ __html: privacyLi3 }} />
          <li dangerouslySetInnerHTML={{ __html: privacyLi4 }} />
          <li dangerouslySetInnerHTML={{ __html: privacyLi5 }} />
        </ul>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT5 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP12 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP13 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP14 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT6 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP15 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP16 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP17 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT7 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt5 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP18 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt6 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP19 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP20 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt7 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP21 }} />
        <h4 dangerouslySetInnerHTML={{ __html: privacyTt8 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP22 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT8 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP23 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP24 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP25 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP26 }} />
        <a href="https://www.namecheap.com/" target="_blank">
          namecheap.com
        </a>
        <h3 dangerouslySetInnerHTML={{ __html: privacyT9 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP27 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP28 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP29 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP30 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP31 }} />
        <h3 dangerouslySetInnerHTML={{ __html: privacyT10 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP32 }} />
        <p dangerouslySetInnerHTML={{ __html: privacyP33 }} />
        <br />
        <p
          className="italic"
          dangerouslySetInnerHTML={{ __html: privacyP34 }}
        />
        <p id="sign" dangerouslySetInnerHTML={{ __html: privacyP35 }} />
      </div>
    </div>
  </Layout>
);
