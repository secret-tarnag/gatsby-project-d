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

const causeTitle = "Why was this page created?";
const causeP1 = "Assume we have a very wealthy person, let’s call him Anselm. His wealth in unmeasurable, only few people know how he got to it. Anselm is an active supporter of the Innocent Politicians Party, the IPP. He is of very much use to the party, as he is the owner of the most viewed television channel and the most read newspaper in the country. This means that he has a huge influence on the media.";
const causeP2 = "Unfortunately, Mr. A. and his party have lost most of their ethical boundaries, however most of the population doesn’t have the faintest idea what the party is spending much of their payed taxes on, as neither the television, nor the newspapers mention these news. On the contrary, all such news is deemed ‘fake news’ and is stripped of its credibility.";
const causeP3 = "But how is it even possible for the average population to get to the truth and find out what is happening? This is exactly why we need newspapers, TV channels, radios and online news portals which are not owned by Anselm, but are <span class='highlight'>independent</span> of him and other politically engaged people. This way, these mediums could say what is <span class='highlight'>actually</span> happening.";
const causeP4 = "";

const summaryTitle = "What is the problem with non-independent media?";
const summaryP1 = "";

const varietyTitle = "Types of not telling the truth:";
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

const possibilitiesTitle = "What can I do to avoid fake news?";
const possibilitiesP1 = "";
const possibilitiesP2 = "Navigate!";
const possibilitiesP3 = "Find out about the following:<br> Is it a trustable source?<br>Does it have editorial staff, is it a legit organization, not just a Facebook page written by random people who eant to influence you?<br>Does it have any reviews? If yes, read them.<br>Is it on one of the fake-news lists?<br>Did you yourself hear about it?<br>Who is the owner?";
const possibilitiesP4 = "Collect information about the given news source, and then decide.";
const possibilitiesP5 = "Test it!";
const possibilitiesP6 = "If it has passed the above tests, try reading it sceptically, and compare it with other trustable news sources. Does it write anything differently? Does it exaggerate?";
const possibilitiesP7 = "Do not let trust grow too quickly towards a news source, believing everything because you read one trustable article is not a wise decision.";
const possibilitiesP8 = "<span class='highlight'>ATTENTION! </span> Just because we read articles which we dont 'like' does NOT mean that it is not a trustable source of information. You don't get to choose your stories like in a DVD store. This is about staying informed and up-to-date, not about enjoying yourself.";
const possibilitiesP9 = "Read it!";
const possibilitiesP10 = "If you found an independent source, that's great! :) You can also support it financially, to help them spread their word elsewhere. However, stay alert: any independent medium can be bought at any time, making it dependent, maybe even a source of propaganda. It is therefore adviseable to have a solid base and get your information from multiple sources.";

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