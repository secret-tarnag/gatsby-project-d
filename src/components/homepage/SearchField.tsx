import * as React from 'react';
import HelpText from './HelpText';
import { NewsOutletNodes } from '../../pages/index.en';
import Link from 'gatsby-link';

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
        <div className="search-bar-container" role="search">
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
            <button id="submit" className="search-button" type="submit" />
            {/* Suggestions */}
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
                <Link
                  to={`/${this.props.lang}/outlets/${
                    outlet.node.frontmatter.slug
                    }`}
                >
                  <span>{outlet.node.frontmatter.title}</span>
                </Link>
              ))}
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
