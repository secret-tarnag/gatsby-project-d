import * as React from 'react';
import Link from 'gatsby-link';

interface LinkListProps {
  links: Array<{
    text: string;
    to: string;
  }>;
}

export default (props: LinkListProps) => (
  <div className="barlow contents-table">
    {props.links.map(link => (
      <h3>
        <Link to={link.to}>{link.text}</Link>
      </h3>
    ))}
  </div>
);
