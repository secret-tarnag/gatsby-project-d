import * as React from 'react';
import { css } from 'emotion';
import HelpText from './HelpText';

interface SearchFieldProps {
  newsOutlets: any[];
}

interface SearchFieldState {
  searchText: string;
}

export default class SearchField extends React.PureComponent<
  SearchFieldProps,
  SearchFieldState
> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e.currentTarget[0].value);
    console.log(this.props);
  }

  render() {
    return (
      <div id="sub-heading-et-search">
        <h2 className="sub-heading">
          A Nagy <span className="highlight">Média</span>
          figyelő
        </h2>
        <div className="search-bar-container" role="search">
          <form
            name="search"
            action="javascript:void(0)"
            onSubmit={e => this.handleSubmit(e)}
          >
            <input id="input" type="search" name="q" placeholder="keresés" />
            <button id="submit" className="search-button" type="submit" />
          </form>
        </div>
        <HelpText
          mainText={'Tudd meg, hogy ki áll a hírek mögött!'}
          helpText={
            'Itt megtalálhatsz minden fontos információt a különböző médiumok tulajdonosairól, azok politikai kapcsolatairól, a médium beállítottságáról, az általa támogatott politikai oldalról és megismerheted alapvető adatait.'
          }
        />
      </div>
    );
  }
}
