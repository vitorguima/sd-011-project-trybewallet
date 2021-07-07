import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" data-testid="email-input" id="email" required />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" data-testid="password-input" id="password" required />
        </label>
        <button type="button">Enviar</button>
      </form>
    );
  }
}

export default Login;
