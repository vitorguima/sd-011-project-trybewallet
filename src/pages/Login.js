import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login-area">
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Insira sua senha"
          />
        </label>
        <div role="button">Entrar</div>
      </div>
    );
  }
}

export default Login;
