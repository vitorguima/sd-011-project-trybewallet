import React, { Component } from 'react';

class PaymentDescription extends Component {
  render() {
    return (
      <div>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" id="description" />
        </label>
      </div>
    );
  }
}

export default PaymentDescription;
