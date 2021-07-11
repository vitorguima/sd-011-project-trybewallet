import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          Email
          <input type="email" data-testid="email-input" placeholder="Email" />
        </label>
        <label htmlFor="password-input">
          Senha
          <input type="text" data-testid="password-input" placeholder="Senha" />
        </label>
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
