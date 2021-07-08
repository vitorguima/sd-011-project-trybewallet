import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <h3>Login</h3>
          <div className="input-container">
            <label htmlFor="email-input">
              <input
                id="email-input"
                data-testid="email-input"
                type="text"
                placeholder="Digite seu email:"
              />
            </label>
            <label htmlFor="password-input">
              <input
                id="password-input"
                data-testid="password-input"
                type="text"
                placeholder="Digite sua senha:"
              />
            </label>
            <button type="button">Entrar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
