import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            id="email"
            data-testid="email-input"
            type="email"
            name="email"
          />
          <input
            data-testid="password-input"
            id="password"
            type="password"
            name="passwoed"
          />
          <button type="button">
            Entrar
          </button>
        </form>
      </div>);
  }
}

export default Login;
