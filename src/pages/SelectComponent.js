import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectComponent extends Component {
  render() {
    const arrayTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { coins, currency, method, tags, onChange } = this.props;

    return (
      <form>
        <label htmlFor="currency">
          Moeda
          <select
            value={ currency }
            onChange={ onChange }
            id="currency"
            name="currency"
          >
            {coins.map((moeda, index) => (
              <option value={ moeda } key={ index }>{ moeda }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            onChange={ onChange }
            id="method"
            name="method"
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
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
  currency: PropTypes.string,
  method: PropTypes.string,
  tags: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectComponent;
