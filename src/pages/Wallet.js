import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import Fomrs from '../components/Fomrs';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <div className="wallet-container">
          TrybeWallet
          <div className="forms-container">
            <Fomrs />
          </div>
        </div>
      </>
    );
  }
}

export default Wallet;
