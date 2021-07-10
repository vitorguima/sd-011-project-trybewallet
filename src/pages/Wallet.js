import React from 'react';
import '../css/wallet.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrencyAPI from '../services/fetchAPI';
import { submitCurrencies } from '../actions/submitCurrencies';
import { submitActionExpenses } from '../actions/submitExpenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.fetchCurrency = this.fetchCurrency.bind(this);
  }

  componentDidMount() {
    this.currencyAPI();
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async currencyAPI() {
    const { submitCurrency } = this.props;
    const data = await fetchCurrencyAPI();
    const arrayCurrency = Object.keys(data).filter((currency) => currency !== 'USDT');
    submitCurrency(arrayCurrency);
  }

  async fetchCurrency() {
    const { submitExpense } = this.props;
    const data = await fetchCurrencyAPI();
    delete data.USDT;
    submitExpense(this.state, data);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="expenses-input">
        Valor
        <input
          type="text"
          id="expenses-input"
          name="value"
          value={ value }
          onChange={ (event) => this.handleChanges(event) }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição
        <textarea
          id="description-input"
          name="description"
          value={ description }
          onChange={ (event) => this.handleChanges(event) }
        />
      </label>
    );
  }

  renderCurrencyInput() {
    const { array } = this.props;
    return (
      <label htmlFor="currency-select">
        Moeda
        <select
          name="currency"
          id="currency-select"
          onChange={ (event) => this.handleChanges(event) }
        >
          {array.map((currency, index) => (
            <option key={ index }>{currency}</option>))}
        </select>
      </label>
    );
  }

  renderPaymentMethodInput() {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          name="method"
          onChange={ (event) => this.handleChanges(event) }
        >
          <option label="Dinheiro" value="Dinheiro">
            Dinheiro
          </option>
          <option label="Cartão de crédito" value="Cartão de crédito">
            Cartão de crédito
          </option>
          <option label="Cartão de débito" value="Cartão de débito">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="expense">
        Tag
        <select
          id="expense"
          name="tag"
          onChange={ (event) => this.handleChanges(event) }
        >
          <option label="Alimentação" value="Alimentação">Alimentação</option>
          <option label="Lazer" value="Lazer">Lazer</option>
          <option label="Trabalho" value="Trabalho">Trabalho</option>
          <option label="Transporte" value="Transporte">Transporte</option>
          <option label="Saúde" value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div className="wallet-page">
        <Header />
        <form className="form-container">
          <fieldset className="fieldset-container">
            {this.renderValueInput()}
            {this.renderDescriptionInput()}
            {this.renderCurrencyInput()}
            {this.renderPaymentMethodInput()}
            {this.renderTag()}
          </fieldset>
        </form>
        <button
          type="button"
          onClick={ () => this.fetchCurrency() }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  array: state.wallet.currencies,
  totalValue: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  submitCurrency: (arrayMoedas) => dispatch(submitCurrencies(arrayMoedas)),
  submitExpense: (state, exchange) => dispatch(submitActionExpenses(state, exchange)),
});

Wallet.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitCurrency: PropTypes.func.isRequired,
  submitExpense: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
