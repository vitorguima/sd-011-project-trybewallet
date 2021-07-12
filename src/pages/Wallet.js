import React from 'react';
import Cambio from '../components/Cambio';
import Expenses from '../components/Expenses';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Expenses />
        <Cambio />
        <Form />
      </main>
    );
  }
}

export default Wallet;
