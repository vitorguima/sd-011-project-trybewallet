import React from 'react';
import '../CSS/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Login-Page">
        <h1>The Wallet - Login</h1>
        <form className="login-form">
          <label htmlFor="email-input">
            <input
              type="text"
              name="email-input"
              className="email-input"
              placeholder="insira aqui o seu email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            <input
              type="password"
              name="password-input"
              className="password-input"
              placeholder="insira aqui a sua senha"
              data-testid="password-input"
            />
          </label>
          <button type="button" className="Login-Button">Entrar</button>
        </form>
      </div>);
  }
}

export default Login;
