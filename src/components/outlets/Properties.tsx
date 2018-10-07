import * as React from 'react';
import Link from 'gatsby-link';

interface PropertiesProps {
  properties: Array<{ key: string; value: string }>;
}

export default (props: PropertiesProps) => (
  <div className="info-grid-container">
    {props.properties.map(item => (
      <div className="info-grid-element">
        <span className="bold">{item.key}: </span>
        <span>{item.value}</span>
      </div>
    ))}
  </div>
);
