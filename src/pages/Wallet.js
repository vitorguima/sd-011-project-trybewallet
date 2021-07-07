import React from 'react';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>Wallet</h2>
        <Header />
        <FormDespesa />
      </div>
    );
  }
}

export default Wallet;
