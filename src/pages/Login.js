import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-area">
          <form>
            <input placeholder="e-mail" type="email" data-testid="email-input" />
            <input placeholder="senha" type="password" data-testid="password-input" />
            <button type="button">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
