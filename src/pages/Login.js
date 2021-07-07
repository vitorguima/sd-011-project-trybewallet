import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email" data-testid="email-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="senha" data-testid="password-input">
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
          />
        </label>
        <button type="button">
          <Link to="/carteira">Entrar</Link>
        </button>
      </div>
    );
  }
}

export default Login;
