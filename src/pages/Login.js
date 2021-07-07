import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        Login
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
