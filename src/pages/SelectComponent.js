import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends Component {
  render() {
    const arrayTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { coins, coin, payment, tags, onChange } = this.props;

    return (
      <form>
        <label htmlFor="coin">
          Moeda
          <select
            value={ coin }
            onChange={ onChange }
            id="coin"
            name="coin"
          >
            {coins.map((moeda, index) => (
              <option value={ moeda } key={ index }>{ moeda }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select
            onChange={ onChange }
            id="payment-method"
            name="paymentMethod"
            value={ payment }
          >
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            placeholder="selecione"
            onChange={ onChange }
            id="tag"
            name="tag"
            value={ tags }
          >
            { arrayTags.map((tag, index) => <option key={ index }>{ tag }</option>) }
          </select>
        </label>
      </form>
    );
  }
}

SelectComponent.propTypes = {
  coins: PropTypes.array,
  coin: PropTypes.string,
  payment: PropTypes.string,
  tags: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectComponent;
