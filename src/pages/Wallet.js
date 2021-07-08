import React, { Component } from 'react';
import Header from '../components/Header';
import WalletRender from '../components/WalletRender';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <WalletRender />
      </div>
    );
  }
}

export default Wallet;
