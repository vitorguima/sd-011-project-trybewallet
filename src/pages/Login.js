import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="containnerLogin">
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            data-testid="email-input"
            placeholder="digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            data-testid="password-input"
            placeholder="digite sua senha"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
