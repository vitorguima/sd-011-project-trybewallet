import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <TableExpense />
      </div>
    );
  }
}

export default Wallet;
