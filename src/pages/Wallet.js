import React from 'react';
import Form from './Form';
import Headers from './Headers';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Headers />
        <Form />
      </div>
    );
  }
}

export default Wallet;
