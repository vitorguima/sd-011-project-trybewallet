import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Digite seu Email" data-testid="email-input" />
        <input type="text" placeholder="Digite sua senha" data-testid="password-input" />
        <button type="submit">Entrar</button>
      </div>);
  }
}

export default Login;
