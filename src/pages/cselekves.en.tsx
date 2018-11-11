import * as React from 'react';
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
  },
];

const causeTitle = 'Why was this page created?';
const causeParagraphs = [
  'Assume we have a very wealthy person, let’s call him Anselm. His wealth in unmeasurable, ' +
  'only few people know how he got to it. Anselm is an active supporter of the Innocent ' +
  'Politicians Party, the IPP. He is of very much use to the party, as he is the owner of the ' +
  'most viewed television channel and the most read newspaper in the country.' +
  'This means that he has a huge influence on the media.',
  'Unfortunately, Mr. A. and his party have lost most of their ethical boundaries, however most of ' +
  'the population doesn’t have the faintest idea what the party is spending much of their payed ' +
  'taxes on, as neither the television, nor the newspapers mention these news. On the contrary, ' +
  'all such news is deemed ‘fake news’ and is stripped of its credibility.',
  'But how is it even possible for the average population to get to the truth and find out what is happening?' +
  'This is exactly why we need newspapers, TV channels, radios and online news portals which are not owned by ' +
  "Anselm, but are <span class='highlight'>independent</span> of him and other politically engaged people." +
  "This way, these mediums could say what is <span class='highlight'>actually</span> happening.",
  '',
];

const summaryTitle = 'What is the problem with non-independent media?';
const summaryParagraphs = [''];

const varietyTitle = 'Types of not telling the truth:';
const varietyParagraphs = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

const possibilitiesTitle = 'What can I do to avoid fake news?';
const possibilitiesParagraphs = [
  '',
  '<span class="emphasize">Navigate!</span>',
  'Find out about the following:<br> Is it a trustable source?<br>Does it have editorial staff, ' +
  'is it a legit organization, not just a Facebook page written by random people who want to influence you?' +
  '<br>Does it have any reviews? If yes, read them.<br>Is it on one of the fake-news lists?' +
  '<br>Did you yourself hear about it?<br>Who is the owner?',
  'Collect information about the given news source, and then decide.',
  '<span class="emphasize">Test it!</span>',
  'If it has passed the above tests, try reading it sceptically, and compare it with other trustable news sources.' +
  'Does it write anything differently? Does it exaggerate?',
  'Do not let trust grow too quickly towards a news source, believing everything because you read one trustable ' +
  'article is not a wise decision.',
  "<span class='highlight'>ATTENTION! </span> Just because we read articles which we dont 'like' does NOT mean that " +
  "it is not a trustable source of information. You don't get to choose your stories like in a DVD store." +
  'This is about staying informed and up-to-date, not about enjoying yourself.',
  '<span class="emphasize">Read it!</span>',
  "If you found an independent source, that's great! :) You can also support it financially, to help them spread " +
  'their word elsewhere. However, stay alert: any independent medium can be bought at any time, ' +
  'making it dependent, maybe even a source of propaganda. It is therefore adviseable to have a solid base and get ' +
  'your information from multiple sources.',
];

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="en" urlSlug="cselekves" />
    <ScrollToTopButton />
    <div className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves" className="act-title">Take Action</h2>
    </div>
    <LinkList links={links} />
    <div id="cause" className="general-text">
      <h3 id="cause-title" dangerouslySetInnerHTML={{ __html: causeTitle }} />
      <br />
      {causeParagraphs.map(paragraph => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
    <div id="summary" className="general-text">
      <h4
        id="summary-title"
        dangerouslySetInnerHTML={{ __html: summaryTitle }}
      />
      <br />
      {summaryParagraphs.map(paragraph => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
    <div id="variety" className="general-text">
      <h4
        id="variety-title"
        dangerouslySetInnerHTML={{ __html: varietyTitle }}
      />
      <br />
      {varietyParagraphs.map(paragraph => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
    <div id="possibilities" className="general-text">
      <h3
        id="possibilities-title"
        dangerouslySetInnerHTML={{ __html: possibilitiesTitle }}
      />
      <br />
      {possibilitiesParagraphs.map(paragraph => (
        <div>
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
          <br />
        </div>
      ))}
    </div>
    <Footer lng="en" />
  </Layout>
);
