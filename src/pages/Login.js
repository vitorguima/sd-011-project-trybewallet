import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
    this.validateLogin();
  }

  validateLogin() {
    const { email, password } = this.state;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordLength = 5;
    if (password.length >= passwordLength && email.match(emailPattern)) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        Login
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ disableButton }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
