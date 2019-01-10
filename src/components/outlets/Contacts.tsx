import * as React from 'react';
import { css } from 'emotion';

interface ContactsProps {
  name: string;
  fields: Array<{ key: string; value: string }>;
}

const contacts = css({
  width: '100%',
});

export default (props: ContactsProps) => (
  <div className={contacts} >
    <h3 className="slabo">{props.name}</h3>
    {props.fields.map(field => (
      <div>
        <span className="bold">{field.key}: </span>
        <span>{field.value}</span>
      </div>
    ))}
  </div>
);
