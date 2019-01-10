import * as React from 'react';

interface DescriptionProps {
  description: Array<{ text: string; }>;
}

export default (props: DescriptionProps) => (
  <div>
    {props.description.map(paragraph => (
      <p>{paragraph.text}</p>
    ))}
  </div>
);
