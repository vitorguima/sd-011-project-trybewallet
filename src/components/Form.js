import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleForm({ target: { id, value } }) {
    this.setState((oldState) => ({
      ...oldState,
      [id]: value,
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input id="value" type="number" value={ value } onChange={ this.handleForm } />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            value={ description }
            onChange={ this.handleFormChange }
          />
        </label>
        <label htmlFor="currency">
          <select id="currency" value={ currency } onChange={ this.handleForm }>
            <option>BRL</option>
          </select>
        </label>
        <label htmlFor="method">
          <select id="method" value={ method } onChange={ this.handleForm }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select id="tag" value={ tag } onChange={ this.handleForm }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúe</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect()(Form);
