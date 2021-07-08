import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    const saveCurrenciesKeys = Object.keys(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            { saveCurrenciesKeys
              .filter((filter) => filter !== 'USDT')
              .map((currency, index) => <option key={ index }>{ currency }</option>) }
          </select>
        </label>
        <label htmlFor="payment-type">
          Método de pagamento:
          <select id="payment-type">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
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

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

Form.defaultProps = {
  currencies: [],
};

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
};
