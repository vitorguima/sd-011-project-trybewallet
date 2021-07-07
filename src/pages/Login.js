import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" placeholder="Login" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
