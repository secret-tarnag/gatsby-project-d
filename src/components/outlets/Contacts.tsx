import * as React from 'react';
import { css, cx } from 'emotion';

interface ContactsProps {
  name: string;
  fields: Array<{ key: string; value: string }>;
}

const contactsContainer = css({
  width: '80%',
  margin: '1.5rem auto 1.5rem auto',
  fontSize: '1rem',
});
const contactsTitle = css({
  fontSize: '1.5rem',
  margin: '1rem 0',
});
const contactsText = css({
  paddingLeft: '1.5rem',
  lineHeight: '1.3rem',
});

export default (props: ContactsProps) => (
  <div className={contactsContainer} >
    <h3 className={cx(`slabo ${contactsTitle}`)}>{props.name}</h3>
    {props.fields.map(field => (
      <div className={contactsText}>
        <span className="bold">{field.key}: </span>
        <span>{field.value}</span>
      </div>
    ))}
  </div>
);
