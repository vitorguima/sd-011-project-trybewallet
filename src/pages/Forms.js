import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions';

class Forms extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <div>
          Moeda:
          <span data-testid="header-currency-field"> BRL </span>
        </div>
        <form id="newExpense-form">
          <label htmtFor="totalValue">
            Valor
            <input type="number" id="totalValue" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              {Object.keys(currencies).map((curr, index) => (curr !== 'USDT' ? (
                <option key={ index } id={ curr }>{curr}</option>) : null))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select id="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Saúde">Saúde</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);

Forms.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]),
};

Forms.defaultProps = {
  currencies: [],
};
