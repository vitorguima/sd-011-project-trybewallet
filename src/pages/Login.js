import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        Login
        <input
          type="text"
          placeholder="e-mail"
          data-testid="email-input"
        />
        <input
          type="text"
          placeholder="senha"
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
