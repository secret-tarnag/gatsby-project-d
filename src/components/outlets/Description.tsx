import * as React from 'react';
import { css } from 'emotion';

interface DescriptionProps {
  description: Array<{ text: string; }>;
}

const descriptionContainer = css({
  width: '80%',
  margin: '1rem auto',
  fontSize: '1.15rem',
  lineHeight: '1.5rem',
  wordSpacing: '0.2rem',
});
const descriptionParagraphs = css({
  margin: '0.5rem 0',
});

export default (props: DescriptionProps) => (
  <div className={descriptionContainer}>
    {props.description.map(paragraph => (
      <p className={descriptionParagraphs}>{paragraph.text}</p>
    ))}
  </div>
);
