import React, { Component } from 'react';

export default class CurrencyInput extends Component {
  render() {
    return (
      <label htmlFor="currency-select">
        Moeda
        <select id="currency-input">
          {/* componente dos options, será montado atráves de um map */}
        </select>
      </label>
    );
  }
}
