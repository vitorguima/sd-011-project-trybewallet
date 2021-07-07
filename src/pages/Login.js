import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <input
          id="input-email"
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="Login"
        />
        <input
          id="input-password"
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Password"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
