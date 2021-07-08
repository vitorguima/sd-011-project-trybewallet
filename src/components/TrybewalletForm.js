import React from 'react';
import { connect } from 'react-redux';

class TrybewalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      // value: 0,
      // description: '',
      // coin: '',
      // payment: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="trybewallet-form">
        <label htmlFor="value">
          Valor
          <input type="number" name="value" id="value" onChange={ this.handleChange } />
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select name="coin" id="coin" onChange={ this.handleChange }>
            <option value="brl">BRL</option>
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" id="payment" onChange={ this.handleChange }>
            <option value="money">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default connect(null)(TrybewalletForm);
