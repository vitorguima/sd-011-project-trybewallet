import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { keepEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = ({
      validEmail: false,
      validPassword: false,
    });

    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  getEmail() {
    const emailValid = document.getElementById('email-input').value;
    return emailValid;
  }

  emailValidation({ target: { value } }) {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const check = regexEmail.test(value);
    this.setState({ validEmail: check });
  }

  passwordValidation({ target: { value } }) {
    const passwordCharacters = 6;
    if (value.length >= passwordCharacters) {
      this.setState({ validPassword: true });
    }
  }

  render() {
    const { validEmail, validPassword } = this.state;
    const { sendEmailToStore } = this.props;
    return (
      <>
        <div>Login</div>
        <label htmlFor="email-input">
          Email
          <input
            data-testid="email-input"
            type="text"
            id="email-input"
            onChange={ this.emailValidation }
          />
        </label>

        <label htmlFor="password-input">
          Password
          <input
            data-testid="password-input"
            type="password"
            id="password-input"
            onChange={ this.passwordValidation }
          />
        </label>

        <Link to="/carteira">
          <button
            disabled={ !validEmail || !validPassword }
            type="submit"
            id="btn"
            onClick={ () => { sendEmailToStore(this.getEmail()); } }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendEmailToStore: (email) => dispatch(keepEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sendEmailToStore: PropTypes.func.isRequired,
};
