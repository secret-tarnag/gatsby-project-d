import * as React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

import './css/act.css';
import LinkList from '../components/homepage/LinkList';
import Footer from '../components/Footer';
import Layout from '../components/layout';
import ScrollToTopButton from '../components/ScrollToTopButton';

const links = [
  {
    text: 'Why was this page created? ...',
    to: '/en/cselekves#cause',
  },
  {
    text: 'What is the problem with non-independent media? ...',
    to: '/en/cselekves#summary',
  },
  {
    text: 'Types of not telling the truth ...',
    to: '/en/cselekves#variety',
  },
  {
    text: 'What can I do to avoid fake news? ...',
    to: '/en/cselekves#possibilities',
  }
];

const causeTitle = "";
const causeP1 = "";
const causeP2 = "";
const causeP3 = "";
const causeP4 = "";

const summaryTitle = "";
const summaryP1 = "";

const varietyTitle = "";
const varietyP1 = "";
const varietyP2 = "";
const varietyP3 = "";
const varietyP4 = "";
const varietyP5 = "";
const varietyP6 = "";
const varietyP7 = "";
const varietyP8 = "";
const varietyP9 = "";
const varietyP10 = "";
const varietyP11 = "";
const varietyP12 = "";
const varietyP13 = "";
const varietyP14 = "";

const possibilitiesTitle = "";
const possibilitiesP1 = "";
const possibilitiesP2 = "";
const possibilitiesP3 = "";
const possibilitiesP4 = "";
const possibilitiesP5 = "";
const possibilitiesP6 = "";
const possibilitiesP7 = "";
const possibilitiesP8 = "";
const possibilitiesP9 = "";
const possibilitiesP10 = "";

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="hu" urlSlug="cselekves" />
    <ScrollToTopButton />
    <div className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves">Take Action</h2>
    </div>
    <LinkList links={links} />
    <div id="cause" className="general-text">
      <h3 id="cause-title" dangerouslySetInnerHTML={{ __html: causeTitle }}></h3><br></br>
      <p id="cause-p1" dangerouslySetInnerHTML={{ __html: causeP1 }}></p><br></br>
      <p id="cause-p2" dangerouslySetInnerHTML={{ __html: causeP2 }}></p><br></br>
      <p id="cause-p3" dangerouslySetInnerHTML={{ __html: causeP3 }}></p><br></br>
      <p id="cause-p4" dangerouslySetInnerHTML={{ __html: causeP4 }}></p><br></br>
    </div>
    <div id="summary" className="general-text">
      <h4 id="summary-title" dangerouslySetInnerHTML={{ __html: summaryTitle }}></h4><br></br>
      <p id="summary-p1" dangerouslySetInnerHTML={{ __html: summaryP1 }}></p><br></br>
    </div>
    <div id="variety" className="general-text">
      <h4 id="variety-title" dangerouslySetInnerHTML={{ __html: varietyTitle }}></h4><br></br>
      <p id="variety-p1" dangerouslySetInnerHTML={{ __html: varietyP1 }}></p><br></br>
      <p id="variety-p2" dangerouslySetInnerHTML={{ __html: varietyP2 }}></p><br></br>
      <p id="variety-p3" dangerouslySetInnerHTML={{ __html: varietyP3 }}></p><br></br>
      <p id="variety-p4" dangerouslySetInnerHTML={{ __html: varietyP4 }}></p><br></br>
      <p id="variety-p5" dangerouslySetInnerHTML={{ __html: varietyP5 }}></p><br></br>
      <p id="variety-p6" dangerouslySetInnerHTML={{ __html: varietyP6 }}></p><br></br>
      <p id="variety-p7" dangerouslySetInnerHTML={{ __html: varietyP7 }}></p><br></br>
      <p id="variety-p8" dangerouslySetInnerHTML={{ __html: varietyP8 }}></p><br></br>
      <p id="variety-p9" dangerouslySetInnerHTML={{ __html: varietyP9 }}></p><br></br>
      <p id="variety-p10" dangerouslySetInnerHTML={{ __html: varietyP10 }}></p><br></br>
      <p id="variety-p11" dangerouslySetInnerHTML={{ __html: varietyP11 }}></p><br></br>
      <p id="variety-p12" dangerouslySetInnerHTML={{ __html: varietyP12 }}></p><br></br>
      <p id="variety-p13" dangerouslySetInnerHTML={{ __html: varietyP13 }}></p><br></br>
      <p id="variety-p14" dangerouslySetInnerHTML={{ __html: varietyP14 }}></p><br></br>
    </div>
    <div id="possibilities" className="general-text">
      <h3 id="possibilities-title" dangerouslySetInnerHTML={{ __html: possibilitiesTitle }}></h3><br></br>
      <p id="possibilities-p1" dangerouslySetInnerHTML={{ __html: possibilitiesP1 }}></p><br></br>
      <p id="possibilities-p2" dangerouslySetInnerHTML={{ __html: possibilitiesP2 }}></p><br></br>
      <p id="possibilities-p3" dangerouslySetInnerHTML={{ __html: possibilitiesP3 }}></p><br></br>
      <p id="possibilities-p4" dangerouslySetInnerHTML={{ __html: possibilitiesP4 }}></p><br></br>
      <p id="possibilities-p5" dangerouslySetInnerHTML={{ __html: possibilitiesP5 }}></p><br></br>
      <p id="possibilities-p6" dangerouslySetInnerHTML={{ __html: possibilitiesP6 }}></p><br></br>
      <p id="possibilities-p7" dangerouslySetInnerHTML={{ __html: possibilitiesP7 }}></p><br></br>
      <p id="possibilities-p8" dangerouslySetInnerHTML={{ __html: possibilitiesP8 }}></p><br></br>
      <p id="possibilities-p9" dangerouslySetInnerHTML={{ __html: possibilitiesP9 }}></p><br></br>
      <p id="possibilities-p10" dangerouslySetInnerHTML={{ __html: possibilitiesP10 }}></p><br></br>
    </div>
    <Footer lng="hu" />
  </Layout>
);