import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">

        <div className="loginHeroDiv">
          <h1>Login</h1>
        </div>

        <form className="loginForm">
          <label htmlFor="email" className="formLabel">
            <input
              placeholder="Email"
              name="email"
              type="email"
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password" className="formLabel">
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
