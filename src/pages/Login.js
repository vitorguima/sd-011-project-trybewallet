import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.tryLogin = this.tryLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      logged: false,
    };
  }

  tryLogin() {
    const { email, password } = this.state;
    const { logIn } = this.props;

    const reg = new RegExp(/^\S+@\S+\.\S+$/);
    const valid = reg.test(email);

    const minLength = 6;

    if (valid && password.trim().length >= minLength) {
      logIn(email);
      this.setState({ logged: true });
    }
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  checkData(email, password) {
    const reg = new RegExp(/^\S+@\S+\.\S+$/);
    const valid = reg.test(email);

    const minLength = 6;

    if (valid && password.trim().length >= minLength) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password, logged } = this.state;

    const valid = this.checkData(email, password);

    if (logged) return <Redirect to="/carteira" />;

    return (
      <div>
        <p>Email:</p>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleInput }
          data-testid="email-input"
        />
        <p>Senha:</p>
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleInput }
          data-testid="password-input"
        />
        <button
          type="button"
          onClick={ this.tryLogin }
          disabled={ !valid }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (email) => dispatch(loginUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  logIn: PropTypes.func,
}.isRequired;
