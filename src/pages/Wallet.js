import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: 'brl',
      tag: 'food',
      payment: 'credit',
      currencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderSelects = this.renderSelects.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(URL);
    const data = await response.json();
    this.setState((state) => ({
      currencies: {
        ...state.currencies,
        ...data,
      },
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  renderHeader(email) {
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  renderCurrencyOptions() {
    const { currencies } = this.state;
    return (
      Object.keys(currencies).filter((c) => c !== 'USDT').map((currency) => (
        <option
          key={ currency }
          value={ currency }
        >
          { currency }
        </option>))
    );
  }

  renderSelects(currency, payment) {
    const { currencies } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies ? this.renderCurrencyOptions() : <option value="brl">BRL</option>}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select
            id="payment"
            name="payment"
            value={ payment }
            onChange={ this.handleChange }
          >
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
            <option value="cash">Dinheiro</option>
          </select>
        </label>
      </>
    );
  }

  renderForm(value, description, currency, payment) {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            type="number"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.renderSelects(currency, payment)}
      </form>
    );
  }

  render() {
    const { email } = this.props;
    const { value, description, currency, tag, payment } = this.state;
    return (
      <div className="wallet-wrapper">
        {this.renderHeader(email)}
        {this.renderForm(value, description, currency, payment)}
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option selected value="eating">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
