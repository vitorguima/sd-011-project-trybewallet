import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{`Bem vindo: ${ email }`}</h4>
        <h4 data-testid="total-field">0</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

export default Wallet;
