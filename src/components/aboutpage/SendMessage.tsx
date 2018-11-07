import * as React from 'react';
import * as Modal from 'react-modal'

interface SendMessageProps { };
interface SendMessageState {
  showModal: boolean
};

const SendMessageStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

Modal.setAppElement(document.getElementById('modal-root'));

class SendMessage extends React.PureComponent<SendMessageProps, SendMessageState> {
  constructor() {
    super('');
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
        <div id="get-mbb-container">
          <button
            id="get-messagebox-button"
            className="barlow"
            onClick={this.handleOpenModal}
          >
            direkt üzenetet küldök
        </button>
        </div>
        <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}>
          <div className="contact-form-container" id="contact-form">
            <div className="title-container">
              <h3 id="contact-form-title" className="barlow">
                Üzenj nekünk közvetlenül innen:
              </h3>
            </div>
            <div className="label-container">
              <p id="name-label" className="barlow form-text">
                Név:
              </p>
              <p id="email-label" className="barlow form-text">
                E-mail:
              </p>
              <p id="subject-label" className="barlow form-text">
                Tárgy:
              </p>
              <p id="message-label" className="barlow form-text">
                Üzenet:
              </p>
            </div>
            <div className="input-container" role="form">
              <span className="close">&times;</span>
              <form id="form" action="rolunk.html" method="post">
                <input
                  id="name"
                  className="barlow form-field"
                  type="text"
                  name="name"
                  required
                />
                <input
                  id="email"
                  className="barlow form-field"
                  type="email"
                  name="email"
                  required
                />
                <input
                  id="subject"
                  className="barlow form-field"
                  type="text"
                  name="subject"
                  required
                />
                <br />
                <textarea
                  id="message"
                  className="barlow form-field"
                  name="message"
                  rows={1}
                  cols={100}
                  required
                />
                <input
                  id="submit-button"
                  className="barlow"
                  type="submit"
                  value="küldés"
                />
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

}

export default SendMessage;