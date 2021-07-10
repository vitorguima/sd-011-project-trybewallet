import React, { Component } from 'react';

class ExpenseAmount extends Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input type="number" name="value" id="value" />
        </label>
      </div>
    );
  }
}

export default ExpenseAmount;
