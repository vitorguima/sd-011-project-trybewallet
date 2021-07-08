import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    },
    () => {
      this.checkEmail();
    });
  }

  checkEmail() {
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const { email, password } = this.state;
    const parseEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordLength = 6;
    const VALIDATE_EMAIL = parseEmail.test(email);
    const VALIDATE_PASSWORD = password.length >= passwordLength;
    if (VALIDATE_EMAIL && VALIDATE_PASSWORD) {
      this.setState({
        disabled: false,
      });
    }
  }

  render() {
    const { email, disabled, password } = this.state;
    return (
      <>
        Login:
        <input
          type="text"
          placeholder="e-mail"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="senha"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
        />
        <button
          type="button"
          disabled={ disabled }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
