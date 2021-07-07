import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.inputsValidate = this.inputsValidate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      disabled: true,
      redirect: false,
      email: '',
      password: 0,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.inputsValidate);
  }

  inputsValidate() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    const emailText = email;
    const passwordNumbers = password;
    if (regexEmail.test(emailText) && passwordNumbers.length >= PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleClick() {
    const { email } = this.state;
    const { userToSend } = this.props;
    this.setState({ redirect: true });
    userToSend(email);
  }

  render() {
    const { disabled, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <main>
        <h1>Trybe Wallet</h1>
        <label htmlFor="email-input">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu e-mail"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </main>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  userToSend: (email) => dispatch(userInfo(email)),
});

Login.propTypes = {
  userToSend: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
