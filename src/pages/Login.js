import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input data-testid="email-input" type="email" />
        </label>
        <label htmlFor="password">
          Senha
          <input data-testid="password-input" type="password" minLength="6" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
