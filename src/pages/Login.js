import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <input type="text" data-testid="email-input" placeholder="Email" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </>
    );
  }
}

export default Login;
