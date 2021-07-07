import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email-input">
          Usuário:
          <input type="text" data-testid="email-input" />
        </label>

        <label htmlFor="password-input">
          Senha:
          <input type="password" data-testid="password-input" />
        </label>
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
