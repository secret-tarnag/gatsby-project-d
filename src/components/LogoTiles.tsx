import * as React from 'react';
import { css } from 'emotion';

import { NewsOutlet } from '../outlet';
import { Link } from 'gatsby';

interface LogoTilesProps {
  items: NewsOutlet[];
  lang: 'en' | 'hu';
}

const containerStyle = css({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
});

const itemStyle = css({});

const maxImgSize = 500;
const minImgSize = 80;
const referenceReach = 800000;

function calculateWidth(reach: number): number {
  console.log('Calculating reach: ' + reach);
  return minImgSize + ((maxImgSize - minImgSize) * reach) / referenceReach;
}

export default (props: LogoTilesProps) => (
  <div>
    <ul className={containerStyle}>
      {props.items.map(element => (
        <li className={itemStyle} key={element.title}>
          <Link to={`${props.lang}/outlets/${element.slug}`}>
            <img
              src={'/assets/media_icons/' + element.logo}
              width={calculateWidth(element.dailyReach)}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
