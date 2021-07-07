import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="user-email">
            E-mail
            <input
              type="text"
              name="user-email"
              data-testid="email-input"
              placeholder="Digite seu e-mail válido"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Digite uma senha válida"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
