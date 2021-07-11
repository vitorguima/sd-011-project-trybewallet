import React, { Component } from 'react';

class Forms extends Component {
  constructor() {
    super();

    this.inputRender = this.inputRender.bind(this);
  }

  inputRender(label, name, type) {
    return (
      <label htmlFor={ `${name}-input` }>
        { label }
        <input
          type={ type }
          name={ name }
          id={ `${name}-input` }
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.inputRender('Valor:', 'value', 'number')}
        {this.inputRender('Descrição:', 'description', 'text')}
        <label htmlFor="currency-input">
          Moeda:
          <select
            id="currency-input"
          >
            <option>A</option>
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            id="method-input"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag:
          <select
            id="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
