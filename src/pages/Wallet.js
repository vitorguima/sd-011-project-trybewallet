import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      initialExpenses: 0,
      initialCurrencies: 'BRL',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email } = this.props;
    const { initialCurrencies, initialExpenses } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <div data-testid="total-field">{initialExpenses}</div>
          <div data-testid="header-currency-field">{initialCurrencies}</div>
        </header>
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
              <option>teste</option>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.defaultProps = {
  email: '',
  // currencies: '',
  // expenses: 0,
};

Wallet.propTypes = {
  email: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
  // currencies: PropTypes.string,
  // expenses: PropTypes.number,
};
