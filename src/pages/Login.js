import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import saveEmailAction from '../actions/saveEmailAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailIsValid: false,
      passwordIsValid: false,
    };
    this.checkFormValidation = this.checkFormValidation.bind(this);
  }

  componentDidMount() {
    this.buttonIsDisabled();
  }

  componentDidUpdate() {
    this.buttonIsDisabled();
  }

  funcCheckEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  buttonIsDisabled() {
    const { emailIsValid, passwordIsValid } = this.state;
    const button = document.getElementById('sendButton');
    if (emailIsValid && passwordIsValid) button.disabled = false;
    else button.disabled = true;
  }

  checkFormValidation({ target: { id, value } }) {
    const SIX_CARACTERS = 6;
    if (id === 'email') {
      this.setState((oldState) => ({
        ...oldState,
        email: value,
        emailIsValid: this.funcCheckEmail(value),
      }));
    } else {
      this.setState((oldState) => ({
        ...oldState,
        passwordIsValid: value.length >= SIX_CARACTERS,
      }));
    }
  }

  render() {
    const { email } = this.state;
    const { sendEmail } = this.props;

    return (
      <form>
        <label htmlFor="email">
          Login:
          <input
            data-testid="email-input"
            id="email"
            type="email"
            onChange={ this.checkFormValidation }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            id="password"
            type="password"
            onChange={ this.checkFormValidation }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            id="sendButton"
            onClick={ () => sendEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
