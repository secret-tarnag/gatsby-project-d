import * as React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import { Link } from '@reach/router';
import './css/about_us.css';
import SocialMediaLinks from '../components/SocialMediaLinks';
import SendMessage from '../components/aboutpage/SendMessage';

export default () => (
  <Layout>
    <div id="about-modal-root">
      <Navbar id="" lng="en" urlSlug="rolunk" isHomePage={false} />
      <div className="about_main barlow" id="heading">
        <h2 id="heading-title">About us</h2>
      </div>
      <div className="barlow local-nav">
        <span>
          <a href="#introduction">Introduction</a>
        </span>
        <span>
          <a href="#contribution">Volunteering</a>
        </span>
        <span>
          <a href="#privacy">Data protection</a>
        </span>
        <span>
          <a href="#contactinfo">Contact us</a>
        </span>
        <span>
          <a href="#contributors">Contributors</a>
        </span>
      </div>
      <div className="general-text" id="introduction">
        <h2>Introduction</h2>
        <br />
        <span className="emphasize">Who are we?</span>
        <br />
        <p>
          A group of University students that have enough. Okay, that is a bit
          exaggerated. You don't have to afraid of us, we won't try to overthrow
          any government and have no intentions of hosting demonstrations.
      </p>
        <br />
        <br />
        <span className="emphasize">What do we want?</span>
        <br />
        <p>
          Free media.
        <br /> Someone once said that an election cannot be considered 'free' if
                the people cannot vote freely. However, for voting freeliy, people must
                not be overinfluenced by media, but rather be informed objectively and
                factually. It is - of course - impossible to be 100% unbiased, but you
                can reach a level which you can actually call objective journalism.
      </p>
        <br />
        <br />
      </div>
      <div className="general-text" id="contribution">
        <h2>Volunteering</h2>
        <br />
        <p>
          If you would like to help Hungarian democracy stay democratic and you
          see a future for this website, you can choose from the following ways:
      </p>
        <ul className="indention">
          <li>tell us what you think about us/the site</li>
          <li>
            if you find any incorrect, expired or missing information please{' '}
            <a className="about-links" href="#contactinfo">
              contact us
          </a>
            , we will try to improve, correct or add as soon as possible
        </li>
          <li>
            if you like programming or webdesigning, feel free to{' '}
            <a
              className="about-links"
              href="https://github.com/daroczypal/project-d-."
              target="_blank"
            >
              fork us on github
          </a>
            .
        </li>
          <li>
            if you think you have what it takes to become one of us, submit a form
          to{' '}
            <Link className="about-links" to="/hu/csatlakozz">
              join us
          </Link>
            !
        </li>
        </ul>
      </div>
      <div className="general-text" id="privacy">
        <h2>Data Protection</h2>
        <br />
        <p>
          Feel free to read our{' '}
          <a href="/en/adatvedelem" target="_blank">
            Data Protection Declaration
        </a>
          .
      </p>
        <h4>Source code</h4>
        <p>
          You can check the{' '}
          <a
            className="about-links"
            href="https://github.com/daroczypal/project-d-."
            target="_blank"
          >
            source code
        </a>{' '}
          on GitHub.
      </p>
      </div>
      <div className="general-text" id="contactinfo">
        <h2>Contact us</h2>
        <br />
        <p>
          Email: <a href="mailto:democrable@gmail.com">democrable@gmail.com</a>
          <br />
          We read and reply to all emails as soon as poosible. If you don't want
          to write an email, you can also send us a direct message or contact us
          via social media:
      </p>
        <div className="contact-grid">
          <div className="about-sm-icons">
            <SocialMediaLinks />
          </div>
          <SendMessage lng="en" />
        </div>
      </div>
      <div id="message-sent">
        <span className="barlow">Your message has been sent successfully.</span>
        <span className="close">&times;</span>
      </div>
      <div id="message-error">
        <span className="barlow">
          An error has occured. Please try again later.
      </span>
        <span className="close">&times;</span>
      </div>
      <div className="contributors" id="contributors">
        <div id="left" className="grid-item barlow">
          <div className="grid-item-center">
            <h3 className="bold inline">Contributors</h3>
            <p className="inline">&nbsp;- developers, editors, designers:</p>
            <p className="indention">developers: Democritus, Hermes</p>
            <p className="indention">content, design: Lakedaimon</p>
            <p className="indention">photo: </p>
            <p className="license">
              2017-2018;{' '}
              <img
                className="cc"
                id="cc-about"
                alt="Creative Commons"
                src="/assets/cc.svg"
              />{' '}
              by-nc-sa 4.0
          </p>
          </div>
        </div>
        <div id="right" className="grid-item icon-container" />
      </div>
    </div>
  </Layout>
);
