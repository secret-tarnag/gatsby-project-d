import * as React from 'react';
import HelpText from './HelpText';
import { NewsOutletNodes } from '../../pages/index.en';
import Link from 'gatsby-link';
import { css } from 'emotion';

interface SearchFieldProps {
  newsOutlets: NewsOutletNodes[];
  lang: 'en' | 'hu';
}

interface SearchFieldState {
  searchText: string;
}

const helpTexts = {
  maintext: {
    en: 'Find out who is behind the news!',
    hu: 'Tudd meg, hogy ki áll a hírek mögött!',
  },
  helptext: {
    en: 'Here you can find all the important information of different mediums: owners, political connections, ' +
      'publishers, editors, independence- and ethics factor and ideology.',
    hu: 'Itt megtalálhatsz minden fontos információt a különböző médiumok tulajdonosairól, azok politikai ' +
      'kapcsolatairól, a médium beállítottságáról, az általa támogatott politikai oldalról és megismerheted' +
      'alapvető adatait.',
  },
};
const title = {
  en: 'The Big <span class="highlight">Media</span> Observer',
  hu: 'A Nagy <span class="highlight">Média</span>figyelő',
};

const searchBarContainer = css({
  width: '60%',
  height: '3rem',
  margin: 'auto',
  marginTop: '3rem',
  marginBottom: '2.5rem',
  backgroundColor: 'transparent',
  '@media (max-width:1000px)': {
    width: '73%',
  },
});
const searchButton = css({
  width: '13%',
  minWidth: '2.125rem',
  height: '3rem',
  color: 'white',
  float: 'right',
  backgroundColor: 'black',
  backgroundImage: 'url("/assets/search_ico_invert.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '2rem 2rem',
  border: '2px solid black',
  borderRadius: '2px',
  ':hover': {
    backgroundColor: 'transparent',
    border: '2px solid black',
    backgroundImage: 'url("/assets/search_ico_transparent.png")',
  },
  ':active': {
    color: 'black',
    backgroundColor: 'lightgray',
  },
  '@media (max-width:1000px)': {
    width: '15%',
  },
});
const suggestionContainer = css({
  width: '84%',
  position: 'relative',
  marginTop: '0.3rem',
  backgroundColor: 'white',
  borderRadius: '2px',
  fontFamily: '"Roboto Condensed", sans-serif',
  zIndex: 3,
});
const suggestionItem = css({
  width: '100%',
  height: '2rem',
  borderBottom: '1px solid #ebebeb',
  overflow: 'hidden',
  ':hover': {
    color: '#000',
    backgroundColor: '#ebebeb',
  },
});
const suggestionLink = css({
  display: 'block',
  width: '100%',
  height: '2rem',
  fontSize: '1.2rem',
  lineHeight: '2rem',
  padding: '0.2rem 0 0.2rem 1rem',
  ':hover, :active': {
    textDecoration: 'none',
    color: '#000',
    backgroundColor: 'transparent',
  },
});

export default class SearchField extends React.PureComponent<
  SearchFieldProps,
  SearchFieldState
  > {
  constructor(props: SearchFieldProps) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log((e.currentTarget[0] as any).value); // This is a VERY UGLY use of as any
    console.log(this.props);
  }

  render() {
    return (
      <div id="sub-heading-et-search">
        <h2 className="sub-heading" dangerouslySetInnerHTML={{ __html: title[this.props.lang] }}>
        </h2>
        <div className={searchBarContainer} role="search">
          <form
            name="search"
            action="javascript:void(0)"
            onSubmit={e => this.handleSubmit(e)}
            autoComplete="off"
          >
            <input
              id="input"
              type="search"
              name="q"
              placeholder="keresés"
              onChange={e => this.setState({ searchText: e.target.value })}
            />
            <button id="submit" className={searchButton} type="submit" />
            {/* Suggestions */}
            <div className={suggestionContainer}>
              {this.props.newsOutlets
                .filter(
                  outlet =>
                    outlet.node.frontmatter.title
                      .toLowerCase()
                      .startsWith(this.state.searchText.toLowerCase()) &&
                    outlet.node.frontmatter.lang === this.props.lang &&
                    this.state.searchText.length > 0,
                )
                .map(outlet => (
                  <div className={suggestionItem}>
                    <Link
                      className={suggestionLink}
                      to={`/${this.props.lang}/outlets/${
                        outlet.node.frontmatter.slug
                        }`}
                    >
                      {outlet.node.frontmatter.title}
                    </Link>
                  </div>
                ))}
            </div>
          </form>
        </div>
        <HelpText
          mainText={helpTexts.maintext[this.props.lang]}
          helpText={helpTexts.helptext[this.props.lang]}
        />
      </div>
    );
  }
}
