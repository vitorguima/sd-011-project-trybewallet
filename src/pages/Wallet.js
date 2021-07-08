import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h3>TrybeWallet</h3>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
