import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h3>Login</h3>

        <input
          data-testid="email-input"
          type="text"
          placeholder="E-mail"
        />

        <input
          data-testid="password-input"
          type="text"
          placeholder="Senha"
        />

        <Link to="/carteira">
          <button
            type="submit"
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

export default Login;
