import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleButton() {
    const DEFAULT_EMAIL = 'alguem@alguem.com';
    const SIX = 6;
    const { email, password } = this.state;
    return email === DEFAULT_EMAIL && password.lenght >= SIX;
  }

  render() {
    const { email, password, button } = this.state;
    const verified = this.handleButton();
    return (
      <div>
        <label htmlFor="email" data-testid="email-input">
          <input
            value={ email }
            onChange={ this.handleEmail }
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="senha" data-testid="password-input">
          <input
            value={ password }
            onChange={ this.handlePassword }
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
          />
        </label>
        <button type="button" disabled={ verified }>
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </div>
    );
  }
}

export default Login;
