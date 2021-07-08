import React from 'react';

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

        <button
          disabled={ !validEmail || !validPassword }
          type="submit"
          id="btn"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
