import * as React from 'react';
import { css } from 'emotion';

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
          onKeyUp={() => null} // Todo
        />
        <button id="submit" className="search-button" />
      </form>
    </div>
    <div id="helptext" className="barlow">
      <h3 id="helptext-title" className="helptext-title">
        Tudd meg, hogy ki áll a hírek mögött!
      </h3>
      <br />
      <p id="helptext-p" className="helptext-p">
        Itt megtalálhatsz minden fontos információt a különböző médiumok
        tulajdonosairól, azok politikai kapcsolatairól, a médium
        beállítottságáról, az általa támogatott politikai oldalról és
        megismerheted alapvető adatait.
      </p>
    </div>
  </div>
);
