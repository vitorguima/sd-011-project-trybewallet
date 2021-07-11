import React, { Component } from 'react';

class ExpenseDescription extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" id="description" />
      </label>
    );
  }
}

export default ExpenseDescription
