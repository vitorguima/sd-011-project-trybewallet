import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailIsBad: true,
      pwdIsBad: true,
    };
    this.checkPassword = this.checkPassword.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  checkEmail(e) {
    const emailRegex = /^(\S+)@((?:(?:(?!-)[a-z0-9-]{1,62}[a-z0-9])\.)+[a-z0-9]{2,12})$/;
    const { value } = e.target;
    if (emailRegex.test(value)) this.setState({ emailIsBad: false });
    else this.setState({ emailIsBad: true });
  }

  checkPassword(e) {
    const { value } = e.target;
    const pwdMinimumLength = 6;
    if (value.length >= pwdMinimumLength) this.setState({ pwdIsBad: false });
    else this.setState({ pwdIsBad: true });
  }

  render() {
    const { emailIsBad, pwdIsBad } = this.state;

    return (
      <div className="login">
        <input
          data-testid="email-input"
          onChange={ this.checkEmail }
          type="email"
        />
        <input
          data-testid="password-input"
          onChange={ this.checkPassword }
          type="password"
        />
        <button
          type="button"
          disabled={ emailIsBad || pwdIsBad }
        >
          Entrar
        </button>
      </div>

    );
  }
}

export default Login;
