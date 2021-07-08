import React, { Component } from 'react';

export default class ExpenseCategory extends Component {
  render() {
    return (
      <label htmlFor="expense">
        Tag
        <select id="expense" name="expense">
          <option label="Alimentação" name="expense">Alimentação</option>
          <option label="Lazer" name="expense">Lazer</option>
          <option label="Trabalho" name="expense">Trabalho</option>
          <option label="Transporte" name="expense">Transporte</option>
          <option label="Saúde" name="expense">Saúde</option>
        </select>
      </label>
    );
  }
}
