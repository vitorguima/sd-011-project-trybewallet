import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.ableDisable = this.ableDisable.bind(this);
  }

  handleUserName({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  ableDisable() {
    const { email, password } = this.state;
    const userConfig = /[a-z0-9._-]+@[a-z0-9]+\.[a-z]+$/;
    const passwordConfig = 6;
    return userConfig.test(email) && password.length >= passwordConfig;
  }

  render() {
    const ableOrDisable = this.ableDisable();
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email-input">
            Usuário:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              onChange={ this.handleUserName }
            />
          </label>

          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              onChange={ this.handleUserName }
            />
          </label>
          <button
            type="submit"
            disabled={ !ableOrDisable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);
