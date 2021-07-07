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
    this.validateLogin = this.validateLogin.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
    this.validateLogin();
  }

  validateLogin() {
    const { email, password } = this.state;
    const minSize = 5;
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (password.length >= minSize && re.test(email)) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="text"
            id="email"
            onChange={ this.handleChange }
          />

        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            id="password"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ disabled }>Entrar</button>
      </div>
    );
  }
}

export default Login;
