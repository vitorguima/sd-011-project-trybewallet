import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form className="login-form">
          <label htmlFor="login-email">
            Login
            <input type="email" data-testid="email-input" className="login-email" />
          </label>
          <label htmlFor="login-pass">
            Senha
            <input type="password" data-testid="password-input" className="login-pass" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
