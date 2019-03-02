import * as React from 'react';
import { css } from 'emotion';

interface DescriptionProps {
  description: string;
}

const descriptionContainer = css({
  width: '80%',
  margin: '1rem auto',
  fontSize: '1.15rem',
  lineHeight: '1.5rem',
  wordSpacing: '0.2rem',
  '& ul': {
    listStyleType: 'square',
    paddingLeft: '1.5rem',
  },
  '& h1': {
    margin: '1.5rem 0',
  },
  '& h2, & h3': {
    margin: '0.5rem 0',
  },
});

export default (props: DescriptionProps) => (
  <div
    className={descriptionContainer}
    dangerouslySetInnerHTML={{ __html: props.description }}
  />
);
