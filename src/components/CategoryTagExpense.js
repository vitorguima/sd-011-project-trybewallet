import React, { Component } from 'react';

class CategoryTagExpense extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

export default CategoryTagExpense;
