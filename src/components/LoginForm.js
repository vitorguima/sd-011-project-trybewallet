import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Login:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="alguem@email.com"
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="digite sua senha"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// Foi criado o formulário do requisito 1.
