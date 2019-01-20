import * as React from 'react';
import { css } from 'emotion';

interface DictionaryListItemProps {
  title: string;
  pharagraphs: Array<{
    text: string;
  }>;
}

interface DictionaryListItemState {
  visible: boolean;
}

const description = css({
  display: 'none',
});
const visibleDescription = css({
  display: 'block',
});
const titleStyle = css({
  fontSize: '2rem',
});

export default class DictionaryListItem extends React.PureComponent<
  DictionaryListItemProps,
  DictionaryListItemState
  > {
  constructor(props: DictionaryListItemProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  click() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const itemClass = this.state.visible ? visibleDescription : description;
    return (
      <div>
        <div className={titleStyle} onClick={this.click}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={itemClass}>
          {this.props.pharagraphs.map(pharagraph => (
            <p>{pharagraph.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
