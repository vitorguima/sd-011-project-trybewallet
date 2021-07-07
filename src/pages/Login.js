import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="input-email" data-testid="email-input">
          Email:
          <input />
        </label>
        <label htmlFor="input-password" data-testid="password-input">
          Senha:
          <input />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
