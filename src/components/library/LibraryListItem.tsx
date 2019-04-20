import * as React from 'react';
import { css } from 'emotion';

interface LibListItemProps {
  title: string;
  links: Array<{
    text: string;
    to: string;
    comment: string;
  }>;
}

const section = css({
  margin: '1rem 0',
});
const sectionTitle = css({
  fontSize: '2rem',
  fontWeight: 'normal',
  marginBottom: '1rem',
});
const libraryLink = css({
  fontSize: '1.2rem',
  marginLeft: '3rem',
  fontFamily: '"Comfortaa", cursive',
});
const comment = css({
  fontSize: '1.1rem',
  fontStyle: 'italic',
  marginLeft: '5rem',
});
const libraryHr = css({
  height: '1px',
  backgroundColor: '#000',
  border: 'none',
  margin: '0.5rem',
});

export default (props: LibListItemProps) => (
  <div className={section}>
    <h4 className={sectionTitle}>{props.title}</h4>
    {props.links.map(link => (
      <div>
        <a className={libraryLink} href={link.to} target="_blank">{link.text}</a>
        <span className={comment}>{link.comment}</span>
      </div>
    ))}
    <hr className={libraryHr}></hr>
  </div>
);
