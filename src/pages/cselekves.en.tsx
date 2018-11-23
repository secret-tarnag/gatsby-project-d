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
  <p>
    Assume we have a very wealthy person, let’s call him Anselm. His wealth in unmeasurable,
    only few people know how he got to it. Anselm is an active supporter of the Innocent
    Politicians Party, the IPP. He is of very much use to the party, as he is the owner of the
    most viewed television channel and the most read newspaper in the country.
    This means that he has a huge influence on the media.
  </p>,
  <p>
    Unfortunately, Mr. A. and his party have lost most of their ethical boundaries, however most of
    the population doesn’t have the faintest idea what the party is spending much of their payed
    taxes on, as neither the television, nor the newspapers mention these news. On the contrary,
    all such news is deemed ‘fake news’ and is stripped of its credibility.
  </p>,
  <p>
    But how is it even possible for the average population to get to the truth and find out what is happening?
    This is exactly why we need newspapers, TV channels, radios and online news portals which are not owned by
    Anselm, but are <span className='highlight'>independent</span> of him and other politically engaged people.
    This way, these mediums could say what is <span className='highlight'>actually</span> happening.
  </p>,
  <p>
    But how can one be sure about how independent the media is? <span className="emphasize">This is
    why we created this webpage</span>. Here you can find the political orientations, owners of various news
    sources; and how these are connected to political leaders. Additionally, popularity indicators and reliability
    indices will help you notice any deviation from the truth.
  </p>,
];

const summaryTitle =
  'Let us sum up why politically influenced media is unhealthy:';
const summaryParagraphs = [
  'Because they cannot or will not publish news objectively and impartially, due to pressure ' +
  'from high-level officials.',
];

const varietyTitle = 'Types of not telling the truth:';
const varietyParagraphs = [
  <p>
    <span className="highlight">1.Distortion: </span> Thanks to the government, our economy has been constantly
    growing in the recent years (governmental media). Reality: The economy is actually growing, but so is our
    national debt and we are developing at a smaller rate than our neighbouring countries.
  </p>,
  <p>
    Facts can be portayed in many different ways, depeding on what you want to illustrate with them. In most cases
    the circumstances of events,  their contexts are just as important as the facts themelves. Unfortunately, having
    been  deprived of the context, facts can easily lose their factuality.
  </p>,
  <p>
    <span className="highlight">2.Simple omission: </span>{' '}"&nbsp;&nbsp;" (party media). Reality: Two politicians,
  'connected to a party, were arrested and accused of different crimes, including embezzlement, corruption and abuse
  'of power…</p>,
  <p>
    Also it is very comfortable not to publish something, especially when it gets embarrassing  for the party itself.
    Of course where the media is adequately plural, this might not be very effective, because everybody can find the
    news published in other news sources. Therefore it is worth getting information from more than one channel.
    Otherwise, how would you know what was left out?
  </p>,
  <p>
    <span className="highlight">3. Discrimination: </span>Tipically cases, where the privileged  party member gets a
     page long illustrious  portrayals (e.g. before elections), while other politicans are not, or just barely
     mentioned. Take a look at the Febuary release of the ’Csepeli Hirmondó’ 2018 (
      <a
      href={
        'https://444.hu/2018/02/23/10-foton-szerepel-es-19-alkalommal-van-leirva-nemeth-szilard-neve-a-csepeli-ujsagban'
      }
      target="_blank"
    >
      article
    </a>{' '}
    |{' '}
    <a href="docs/CSH_163_.pdf" target="_blank">
      release
    </a>
    )<br />
    and the newspaper of Józsefváros (
    <a
      href="https://merce.hu/2018/07/06/jozsefvaros-lapja-nem-tud-a-keruleti-polgarmester-valasztasrol"
      target="_blank"
    >
      article
    </a>
    |{' '}
    <a href="docs/jozsefvaros_ujsag_2018-23.pdf" target="_blank">
      release
    </a>
    )
  </p>,
  <p>
    <span className="highlight">4.Positive dumping: </span>This is a wider phenomenon.It is based on the fact that
    citizens are not dissatisfied if less bad news reaches them. So the medium has no other obligations apart from
    publishing  neutral information or news that sends posititive messages towards  the targeted people.
  </p>,
  <p>
    This phenomenon usually goes hand in hand with the fact that these portals only publish negative news about the
  oppositional parties in order to bring  them into disrepute. This obviously does not apply to tabloids and news
  about natural disasters or crime. Most people tend to like these kinds of news.
  </p>,
  <p>E.g.:The analysis of the public service media broadcast (
    <a
      href="https://mertek.atlatszo.hu/a-szavak-ereje-manipulacios-eszkozok-a-hirszerkesztesben"
      target="_blank"
    >
      article
    </a>{' '}
    |{' '}
    <a href="docs/Szúrópróba-26.pdf" target="_blank">
      the study
    </a>
    ).
  </p>,
  <p>
    <span className="highlight">5.Simple lie: </span>As the title of this category suggests, we simply mean the
    intentional (or unintentional) spreading of false facts.</p>,
  <p>
    For example, someone supposedly set money on fire in their backyard when they did not.
  </p>,
  <p>
    <span className="highlight">6. A campaign for discrediting: </span>the targeted person (who is a threat to the
    party) is being tendentiously discredited in front of the public, based on personal faults or events that took place
    in the past. Recently, in Hungary people have been  discrediting  each other based on lies, a technique which has
    proved much more effective than any other previous technique, due to the fact that people are more interested
    in fabricated news than real ones. Hence these rumours spread much faster because of their thrill. Besides, by
    the time somebody  reveals the truth about a lie, nobody is interested anymore and the person who was discredited
    has already lost their reputation.
  </p>,
  <p>
    <span className="highlight">7.Incitement, hatred: </span> Intimidation/violence against people from different ethnic
    or religious backgrounds, different genders or political views. This usually manifests itself in physical, verbal
    or written acts of hatred against a group that has been discrminated and stigmatized.
  </p>,
  <p>
    This is highly condemnable and always based on lies.
  </p>,
  <p>
    We hope we managed to categorize the above in a mostly clear way, although different categories may be
    overlapping each other. In real life, they mostly appear as a combination of multiple types.</p>,
];

const possibilitiesTitle =
  'What can we do if we don’t want to read bullshit and be manipulated?';
const possibilitiesParagraphs = [
  <p> The most important thing is to be conscious.</p>,
  <p>
    <span className="emphasize">Navigate!</span>
  </p>,
  <p>
    Find out about the following:
    <br /> Is it a trustable source?
    <br />
    Does it have editorial staff, is it a legit organization, not just a
    Facebook page written by random people who want to influence you?
    <br />
    Does it have any reviews? If yes, read them.
    <br />
    Is it on one of the fake-news lists?
    <br />
    Did you yourself hear about it?
    <br />
    Who is the owner?
  </p>,
  <p>Collect information about the given news source, and then decide.</p>,
  <p>
    <span className="emphasize">Test it!</span>
  </p>,
  <p>
    If it has passed the above tests, try reading it sceptically, and compare it
    with other trustable news sources.Does it write anything differently? Does
    it exaggerate?
  </p>,
  <p>
    Do not let trust grow too quickly towards a news source, believing
    everything because you read one trustable article is not a wise decision.
  </p>,
  <p>
    <span className="highlight">ATTENTION! </span> Just because we read articles
    which we dont 'like' does NOT mean that it is not a trustable source of
    information. You don't get to choose your stories like in a DVD store. This
    is about staying informed and up-to-date, not about enjoying yourself.
  </p>,
  <p>
    <span className="emphasize">Read it!</span>
  </p>,
  <p>
    If you found an independent source, that's great! :) You can also support it
    financially, to help them spread " + 'their word elsewhere. However, stay
    alert: any independent medium can be bought at any time, making it
    dependent, maybe even a source of propaganda. It is therefore adviseable to
    have a solid base and get your information from multiple sources.
  </p>,
];

export default () => (
  <Layout>
    <Navbar isHomePage={false} lng="en" urlSlug="cselekves" />
    <ScrollToTopButton />
    <div className="barlow acting-main" id="heading">
      <h2 id="heading-cselekves">Take Action</h2>
    </div>
    <LinkList links={links} />
    <div id="cause" className="general-text">
      <h3 id="cause-title" dangerouslySetInnerHTML={{ __html: causeTitle }} />
      <br />
      {causeParagraphs.map(paragraph => (
        <div>
          {paragraph}
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
          {paragraph}
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
          {paragraph}
          <br />
        </div>
      ))}
    </div>
    <Footer lng="en" />
  </Layout>
);
