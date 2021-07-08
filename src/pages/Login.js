import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <form>
          <label htmlFor="email">
            <input
              placeholder="Email"
              name="email"
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Senha"
              name="password"
              type="password"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </form>

      </div>
    );
  }
}

export default Login;
