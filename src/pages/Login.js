import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            name="pass"
            placeholder="Senha"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
