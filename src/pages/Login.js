import React from 'react';

import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  validateEmail(email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(String(email).toLowerCase());
  }

  buttonValidation() {
    const { email, password } = this.state;
    const minEmailLength = 6;

    if (email.length === 0 || password.length === 0) {
      return (
        <button
          type="button"
          disabled
        >
          Entrar
        </button>
      );
    }

    if (!this.validateEmail(email) || password.length < minEmailLength) {
      return (
        <button
          type="button"
          disabled
        >
          Entrar
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={ this.handleLogin }
      >
        Entrar
      </button>
    );
  }

  handleLogin() {
    this.setState(() => ({
      isLoggedIn: true,
    }));
  }

  render() {
    const { email, password, isLoggedIn } = this.state;

    return (
      <div className="login-wrapper">
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </form>
        {this.buttonValidation()}
        {isLoggedIn ? <Redirect to="/carteira" /> : <p>Faça seu login</p>}
      </div>
    );
  }
}

export default Login;
