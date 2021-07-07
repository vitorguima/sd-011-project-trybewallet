import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <label htmlFor="email">
          <input type="text" placeholder="Email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          <input type="password" placeholder="Senha" data-testid="password-input" />
        </label>
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
