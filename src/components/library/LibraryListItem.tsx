import * as React from 'react';
import Link from 'gatsby-link';

interface LibListItemProps {
  title: string;
  links: Array<{
    text: string;
    to: string;
    comment: string;
  }>
}

export default (props: LibListItemProps) => (
  <div className="library-list-section">
    <h4 className="library-section-title">{props.title}</h4>
    {props.links.map(link => (
      <div>
        <a className="library-link" href={link.to} target="_blank">{link.text}</a>
        <span className="library-comment">{link.comment}</span>
      </div>
    ))}
    <hr className="library-hr"></hr>
  </div>
);