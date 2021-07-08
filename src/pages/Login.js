import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>

        <div>Login</div>

        <div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
            />
          </label>
        </div>

        <button type="button">Entrar</button>

      </section>
    );
  }
}

export default Login;
