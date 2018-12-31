import * as React from 'react';

interface SourcesProps {
  sources: Array<{ text: string; link: string }>;
  lang: 'en' | 'hu';
}

const text = {
  'en': 'Sources, documents',
  'hu': 'Források, dokumentumok',
};

export default (props: SourcesProps) => (
  <div className="source-container">
    <h3 className="source-title slabo">{text[props.lang]}</h3>
    <ul className="source-list">
      {props.sources.map(item => (
        <li><a href={item.link} target="_blank">{item.text}</a></li>
      ))}
    </ul>
  </div>
);
