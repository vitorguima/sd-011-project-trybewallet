import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Login:
          <input data-testid="email-input" id="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input data-testid="password-input" id="password" />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
