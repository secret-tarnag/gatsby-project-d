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

const itemContainer = css({
  fontFamily: '"Roboto Condensed", sans-serif',
});
const titleStyle = css({
  fontSize: '1.2rem',
  fontFamily: '"Comfortaa", cursive',
  padding: '0.3rem',
  margin: '0.3rem 0',
  cursor: 'pointer',
  borderTop: '1px solid transparent',
  transition: 'all .3s',
  ':hover': {
    borderTop: '1px solid gray',
  },
});
const iconContainer = css({
  position: 'relative',
  top: '0.3rem',
  left: '4rem',
});
const description = css({
  height: '0rem',
  display: 'none',
});
const visibleDescription = css({
  height: 'auto',
  display: 'block',
  padding: '0.2rem 0.3rem',
  margin: '0.2rem 0',
  fontSize: '1.1rem',
});
const pharagraphStyle = css({
  margin: '0.5rem 0',
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
      <div className={itemContainer}>
        <div className={titleStyle} onClick={() => this.click()}>
          <span>
            {this.props.title}
          </span>
          <span className={iconContainer}>
            <i className="material-icons">{this.state.visible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
          </span>
        </div>
        <div className={itemClass}>
          {this.props.pharagraphs.map(pharagraph => (
            <p className={pharagraphStyle}>{pharagraph.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
