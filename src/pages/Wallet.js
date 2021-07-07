import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h4 data-testid="email-field">{`Bem vindo: ${ email }`}</h4>
      </header>
    );
  }
}

export default Wallet;
