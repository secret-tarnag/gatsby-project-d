import * as React from 'react';
import { css } from 'emotion';

interface PropertiesProps {
  properties: Array<{ key: string; value: string }>;
}

const infoGrid = css({
  width: '90%',
  margin: '2rem auto 3rem auto',
  display: 'grid',
  gridTemplateColumns: '55% 45%',
  gridTemplateRows: '2.5rem',
  gridAutoRows: '2.5rem',
  backgroundColor: 'transparent',
  '@media (max-width: 1000px)': {
    gridTemplateColumns: 'auto',
  }
});

const gridElement = css({
  fontSize: '1.3rem',
  padding: '0.3rem 0.8rem',
  backgroundColor: 'transparent',
});

export default (props: PropertiesProps) => (
  <div className={infoGrid}>
    {props.properties.map(item => (
      <div className={gridElement}>
        <span className="bold">{item.key}: </span>
        <span>{item.value}</span>
      </div>
    ))}
  </div>
);
