import React, { Component } from 'react';
import ButtonAdd from './ButtonAdd';
import CompMethod from './CompMethod';
// import { connect } from 'react-redux';
import CompOptionMoed from './CompOptionMoed';

class FormWallet extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
    this.ocValue = this.ocValue.bind(this);
  }

  ocValue({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            name="value"
            value={ value }
            onChange={ this.ocValue }
            type="text"
          />
        </label>
        <label htmlFor="desc">
          Descrição
          <input
            id="desc"
            name="description"
            value={ description }
            onChange={ this.ocValue }
            type="text"
          />
        </label>
        <label htmlFor="moed">
          Moeda
          <select name="currency" id="moed" value={ currency } onChange={ this.ocValue }>
            <CompOptionMoed />
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" value={ method } onChange={ this.ocValue }>
            <CompMethod />
          </select>
        </label>
        <label htmlFor="methoddesp">
          Tag
          <select name="tag" id="methoddesp" value={ tag } onChange={ this.ocValue }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <ButtonAdd propsForm={ this.state } />
      </form>
    );
  }
}

export default FormWallet;
