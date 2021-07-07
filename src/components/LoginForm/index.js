import React from 'react';

export default class Loginform extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="email" />
        <input data-testid="password-input" type="password" />
        <button type="button">Entrar</button>
      </form>
    );
  }
}
