import React from 'react';

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
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
