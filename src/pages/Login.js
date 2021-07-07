import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            data-testid="email-input"
            name="email"
            type="text"
            required
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            data-testid="password-input"
            name="senha"
            type="text"
            maxLength="6"
            required
          />
        </label>
        <Link to="/wallet">
          <button type="button">Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Login;
