import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
