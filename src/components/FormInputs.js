import React, { Component } from 'react';

class FormInputs extends Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea name="description" id="description" />
        </label>
      </div>
    );
  }
}

export default FormInputs;
