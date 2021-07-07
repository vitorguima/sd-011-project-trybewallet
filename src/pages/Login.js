import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Digite seu email"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}
