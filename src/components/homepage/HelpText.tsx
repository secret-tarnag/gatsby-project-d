import * as React from 'react';
import { css } from 'emotion';

interface HelpTextProps {
  mainText: string;
  helpText: string;
}

interface HelpTextState {
  clicked: boolean;
}

const helptext = css({
  width: '85%',
  textAlign: 'center',
  margin: '0.5rem auto',
  fontSize: '1.1rem',
  color: 'white',
});
const helptextTitle = css({
  cursor: 'help',
  fontWeight: 'normal',
});

export default class HelpText extends React.PureComponent<
  HelpTextProps,
  HelpTextState
  > {
  constructor(props: HelpTextProps) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  clicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    const helpTextClass = this.state.clicked
      ? 'helptext-p is-visible'
      : 'helptext-p';
    return (
      <div className={`barlow ${helptext}`}>
        <h3
          id="helptext-title"
          className={helptextTitle}
          onClick={() => this.clicked()}
        >
          {this.props.mainText}
        </h3>
        <br />
        <p id="helptext-p" className={helpTextClass}>
          {this.props.helpText}
        </p>
      </div>
    );
  }
}
