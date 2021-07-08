import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { coins } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name="descrição" id="descrição" />
          </label>
          <label htmlFor="coin">
            Moeda
            <select name="coin" id="coin">
              {coins.map((value, index) => (
                <option value={ value } key={ index }>{value}</option>))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select name="pagamento" id="pagamento">
              <option>Selecione método de pagamento</option>
              <option value="money">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag" id="tag">
              <option>Selecione categoria de despesa</option>
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.array,
}.isRequired;
