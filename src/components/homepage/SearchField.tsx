import * as React from 'react';
import { css } from 'emotion';
import HelpText from './HelpText';

interface SearchFieldProps {
  newsOutlets: any[];
}

export default (props: SearchFieldProps) => (
  <div id="sub-heading-et-search">
    <h2 className="sub-heading">
      A Nagy <span className="highlight">Média</span>
      figyelő
    </h2>
    <div className="search-bar-container" role="search">
      <form name="search">
        <input
          id="input"
          type="search"
          name="q"
          placeholder="keresés"
          value=""
          onChange={() => null} // Todo
        />
        <button id="submit" className="search-button" />
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
