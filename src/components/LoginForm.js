import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email-input">
          Insira seu email:
          <input data-testid="email-input" type="email" />
        </label>

        <br />
        <label htmlFor="password-input">
          Insira sua senha:
          <input data-testid="password-input" type="password" />
        </label>

        <button type="button">Entrar</button>

      </form>
    );
  }
}

export default LoginForm;
