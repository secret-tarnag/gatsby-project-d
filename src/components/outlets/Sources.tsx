import * as React from 'react';
import { css, cx } from 'emotion';

interface SourcesProps {
  sources: Array<{ text: string; link: string }>;
  lang: 'en' | 'hu';
}

const text = {
  en: 'Sources, documents',
  hu: 'Források, dokumentumok',
};

const sourceContainer = css({
  width: '90%',
  margin: '1.5rem auto 1.5rem auto',
  fontSize: '1rem',
});
const sourceTitle = css({
  fontSize: '1.5rem',
  margin: '1rem 0',
});
const sourceList = css({
  listStyleType: 'square',
  paddingLeft: '1.5rem',
  lineHeight: '1.3rem',
});

export default (props: SourcesProps) => (
  <div className={sourceContainer}>
    <h3 className={cx(`slabo ${sourceTitle}`)}>{text[props.lang]}</h3>
    <ul className={sourceList}>
      {props.sources.map(item => (
        <li><a href={item.link} target="_blank">{item.text}</a></li>
      ))}
    </ul>
  </div>
);
