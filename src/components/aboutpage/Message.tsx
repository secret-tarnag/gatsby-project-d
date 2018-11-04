import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Modal from 'react-modal';
import * as ReactModal from 'react-modal';

Modal.setAppElement('#about-root');

interface MessageProps { };
interface MessageState {
  showModal: boolean
};

class Message extends React.PureComponent<MessageProps, MessageState> {
  constructor() {
    super("");
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}>

        </ReactModal>
      </div>
    );
  }

}