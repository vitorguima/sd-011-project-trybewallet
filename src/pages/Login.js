import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <div>
          <label htmlFor="email">
            <input data-testid="email-input" type="email" placeholder="Digite o e-mail" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              placeholder="Digite a senha"
            />
          </label>
        </div>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
