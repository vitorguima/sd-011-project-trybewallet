import React, { Component } from 'react';

export default class ValueInput extends Component {
  render() {
    return (
      <label htmlFor="expenses-input">
        Valor
        <input id="expenses-input" />
      </label>
    );
  }
}
