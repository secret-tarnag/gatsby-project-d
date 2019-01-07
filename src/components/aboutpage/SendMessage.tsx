import * as React from 'react';
import * as Modal from 'react-modal';
import { css } from 'emotion';

interface SendMessageProps {
  lng: 'en' | 'hu';
}
interface SendMessageState {
  showModal: boolean;
}

const SendMessageStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  content: {
    position: 'absolute',
    top: 100,
    left: 10,
    right: 10,
    bottom: 16,
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0px',
  },
};

const openButtonContainer = css({
  width: '15rem',
  margin: '1rem auto',
});
const openButtonStyles = css({
  border: '1px solid black',
  /*border-radius: 2px;*/
  fontSize: '1.5rem',
  padding: '0.5rem',
  color: 'white',
  backgroundColor: 'black',
  transition: 'all .2s',
  ':hover': {
    color: 'black',
    backgroundColor: 'white',
  },
});
const closeButtonStyles = css({
  position: 'relative',
  float: 'right',
  margin: '2rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'white',
  bottom: '5rem',
  cursor: 'pointer',
  clear: 'both',
});
const formContainer = css({
  width: '100%',
  background: '#4b6677',
  padding: '2rem 0',
});
const messageForm = css({
  width: '70%',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
});
const formTitle = css({
  margin: '1rem',
  fontSize: '2rem',
  color: '#fff',
  textAlign: 'center',
});
const formText = css({
  margin: '0.5rem 0',
  color: 'white',
  padding: '0.5rem 0',
  fontSize: '1.2rem',
  display: 'block',
});
const textarea = css({
  width: '96%',
  height: '6rem',
  resize: 'none',
  backgroundColor: '#eee',
  border: '0.125rem solid transparent',
  fontSize: '1.2rem',
  padding: '0.2rem 1rem',
  ':hover': {
    backgroundColor: '#ddd',
  },
  ':focus': {
    backgroundColor: '#ddd',
    border: '0.125rem solid #727272',
  },
});

const texts = {
  openButton: {
    en: 'direct message',
    hu: 'direkt üzenetet küldök',
  },
  title: {
    en: 'You can send us a direct message through this form:',
    hu: 'Üzenj nekünk közvetlenül innen:',
  },
  name: {
    en: 'Name:',
    hu: 'Név:',
  },
  email: {
    en: 'Email:',
    hu: 'E-mail:',
  },
  subject: {
    en: 'Subject:',
    hu: 'Tárgy:',
  },
  message: {
    en: 'Message:',
    hu: 'Üzenet:',
  },
};

Modal.setAppElement('#about-modal-root');

class SendMessage extends React.PureComponent<SendMessageProps, SendMessageState> {
  constructor(props: SendMessageProps) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div className={openButtonContainer}>
          <button
            className={`barlow ${openButtonStyles}`}
            onClick={this.handleOpenModal}
          >
            {texts.openButton[this.props.lng]}
          </button>
        </div>
        {/*out: className:contact-form-container id:contact-form*/}
        <Modal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} style={SendMessageStyles}>
          <div className={formContainer}>
            <h3 className={`barlow ${formTitle}`}>
              {texts.title[this.props.lng]}
            </h3>
            <span className={closeButtonStyles} onClick={this.handleCloseModal}>&times;</span>
            <form id="form" action="" method="post" className={messageForm}>
              <span className={`barlow ${formText}`}>
                {texts.name[this.props.lng]}
              </span>
              <input
                id="name"
                className="barlow"
                type="text"
                name="name"
                required
              />
              <span className={`barlow ${formText}`}>
                {texts.email[this.props.lng]}
              </span>
              <input
                id="email"
                className="barlow"
                type="email"
                name="email"
                required
              />
              <span className={`barlow ${formText}`}>
                {texts.subject[this.props.lng]}
              </span>
              <input
                id="subject"
                className="barlow"
                type="text"
                name="subject"
                required
              />
              <span className={`barlow ${formText}`}>
                {texts.message[this.props.lng]}
              </span>
              <textarea
                id="message"
                className={`barlow ${textarea}`}
                name="message"
                rows={1}
                cols={100}
                required
              /><br /><br />
              <input
                id="submit-button"
                className="barlow"
                type="submit"
                value="küldés"
              />
            </form>
          </div>
        </Modal>
      </div >
    );
  }

}

export default SendMessage;
