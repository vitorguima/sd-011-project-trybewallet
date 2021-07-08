import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    const { currencies } = props;
    this.state = {
      currency: [...currencies],
    };
  }

  render() {
    const { currency } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" name="valor" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea id="description" type="text" />
        </label>
        <label htmlFor="currency-selector">
          Moeda
          <select name="currencySelector" id="currency-selector">
            {currency.map(({ code }) => (
              <option key={ code } value={ code }>{ code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="paymentMethod" id="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="debit">Cartão de débito</option>
            <option value="credit">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select name="selectTag" id="select-tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

ExpensesForm.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
});

export default ExpensesForm;
