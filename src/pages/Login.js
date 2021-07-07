import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import sendEmailAction from '../actions/sendEmailAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      buttonClicked: false,
    };
    this.handleForm = this.handleForm.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.checkForm = this.checkForm.bind(this);
  }

  componentDidMount() {
    this.checkForm();
  }

  componentDidUpdate() {
    this.checkForm();
  }

  checkForm() {
    const { emailValid, passwordValid } = this.state;
    const button = document.getElementById('send-button');
    if (emailValid && passwordValid) button.disabled = false;
    else button.disabled = true;
  }

  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  handleForm({ target: { id, value } }) {
    const SIX_CARACTERS = 6;

    switch (id) {
    case 'email':
      if (this.emailIsValid(value)) {
        this.setState((oldState) => ({
          ...oldState,
          [id]: value,
          emailValid: true,
        }));
      } else {
        this.setState((oldState) => ({
          ...oldState,
          [id]: value,
          emailValid: false,
        }));
      }
      break;

    case 'password':

      if (value.length >= SIX_CARACTERS) {
        this.setState((oldState) => ({
          ...oldState,
          [id]: value,
          passwordValid: true,
        }));
      } else {
        this.setState((oldState) => ({
          ...oldState,
          [id]: value,
          passwordValid: false,
        }));
      }
      break;

    default:
      break;
    }
  }

  handleButtonClick() {
    const { email } = this.state;
    const { sendEmail } = this.props;
    sendEmail(email);
    this.setState((oldState) => ({
      ...oldState,
      buttonClicked: true,
    }));
  }

  render() {
    const { email, password, buttonClicked } = this.state;

    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            id="email"
            value={ email }
            onChange={ this.handleForm }
            required
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            id="password"
            value={ password }
            onChange={ this.handleForm }
            required
          />
        </label>
        <button
          type="button"
          id="send-button"
          onClick={ this.handleButtonClick }
        >
          Entrar
        </button>
        { buttonClicked && <Redirect to="/wallet" />}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(sendEmailAction(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
