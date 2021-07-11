import React, { Component } from 'react';

class ExpenseAmount extends Component {
  render() {
    return (
      <label htmlFor="value">
        Valor
        <input type="text" id="value" />
      </label>
    );
  }
}

export default ExpenseAmount;
