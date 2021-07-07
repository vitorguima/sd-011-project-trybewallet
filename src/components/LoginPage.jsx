import React, { Component } from 'react';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite seu email..."
              name=""
              id="input-email"
            />
          </label>
          <label htmlFor="input-password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              placeholder="Digite sua senha..."
              name=""
              id=""
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}
