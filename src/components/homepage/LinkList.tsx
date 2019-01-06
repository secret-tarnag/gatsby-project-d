import * as React from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';

interface LinkListProps {
  links: Array<{
    text: string;
    to: string;
  }>;
}

const contentsTable = css({
  width: '70%',
  margin: '3rem auto',
  padding: '0 0 0 2rem',
  borderLeft: '3px solid #000',
});

export default (props: LinkListProps) => (
  <div className={`barlow ${contentsTable}`}>
    {props.links.map(link => (
      <h3>
        <Link to={link.to}>{link.text}</Link>
      </h3>
    ))}
  </div>
);
