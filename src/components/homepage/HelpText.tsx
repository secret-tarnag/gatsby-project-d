import * as React from 'react';

interface HelpTextProps {
  mainText: string;
  helpText: string;
}

interface HelpTextState {
  clicked: boolean;
}

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
      <div id="helptext" className="barlow">
        <h3
          id="helptext-title"
          className="helptext-title"
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
