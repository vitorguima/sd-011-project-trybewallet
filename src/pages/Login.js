import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" />
        <input type="number" data-testid="password-input" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
