import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" type="text" placeholder="Email" />
        <input data-testid="password-input" type="password" placeholder="Senha" />
        <input type="button" value="Entrar" />
      </div>
    );
  }
}

export default Login;
