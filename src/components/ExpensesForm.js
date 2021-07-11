import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpense } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      value: 0,
      currency: '',
      paymentMethod: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { APICurrency } = this.props;
    APICurrency();
  }

  currenciesOptions() {
    const { currencies } = this.props;
    return Object.keys(currencies).filter((curr) => curr !== 'USDT');
  }

  description() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          id="description"
          name="description"
          type="text"
          onChange={ ({ target }) => this.handleChange(target) }

        />
      </label>
    );
  }

  expenseValue() {
    return (
      <label htmlFor="value">
        Valor:
        <input
          id="value"
          name="value"
          type="number"
          placeholder="0"
          onChange={ ({ target }) => this.handleChange(target) }
        />
      </label>
    );
  }

  currency() {
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          onChange={ ({ target }) => this.handleChange(target) }
        >
          {this.currenciesOptions().map((moeda) => (
            <option key={ moeda } value={ moeda }>{moeda}</option>
          ))}
        </select>
      </label>
    );
  }

  paymentMethod() {
    return (
      <label htmlFor="payment-method">
        Método de pagamento:
        <select
          id="payment-method"
          name="payment-method"
          onChange={ ({ target }) => this.handleChange(target) }
        >
          <option value="cash">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debt">Cartão de débito</option>
        </select>
      </label>
    );
  }

  expenseTag() {
    return (
      <label htmlFor="tag">
        tag:
        <select
          id="tag"
          name="tag"
          onChange={ ({ target }) => this.handleChange(target) }
        >
          <option value="cash">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  handleChange({ name, value }) {
    this.setState({ [name]: value });
  }

  handleButton() {
    const { description, value, currency, paymentMethod, tag } = this.state;
    const expenses = {
      description,
      value,
      currency,
      paymentMethod,
      tag,
    };

    const { APICurrency } = this.props;
    APICurrency();
    const { currencies, add } = this.props;
    add(expenses, currencies);

  }

  render() {
    return (
      <form className="expenses-form">
        {this.expenseTag()}
        {this.description()}
        {this.expenseValue()}
        {this.currency()}
        {this.paymentMethod()}
        <input type="button" value="Adicionar despesa" onClick={ this.handleButton() } />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  APICurrency: () => dispatch(fetchCurrency()),
  add: (expenses, currencies) => dispatch(addExpense(expenses, currencies)),
});

ExpensesForm.propTypes = {
  APICurrency: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
