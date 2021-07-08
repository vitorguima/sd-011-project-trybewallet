import React from 'react';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>Wallet</h2>
        <Header />
        <FormDespesa />
        <Table />
      </div>
    );
  }
}

export default Wallet;
