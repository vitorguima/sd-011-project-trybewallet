import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <h1>Trybe Wallet</h1>
        <label htmlFor="email-input">
          <input
            type="text"
            name="name"
            data-testid="email-input"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="text"
            name="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="button">Entrar</button>
      </main>);
  }
}

export default Login;
