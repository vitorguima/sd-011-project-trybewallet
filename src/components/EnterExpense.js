import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCurrency from '../services/serviceAPI';
import Method from './Method';
import Tag from './Tag';
import { fetchExchangesRatesApi } from '../actions';

class EnterExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      arrayCurrency: [],
    };
    this.getCurrencys = this.getCurrencys.bind(this);
    this.optionsCurrency = this.optionsCurrency.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createObjectExpense = this.createObjectExpense.bind(this);
    this.saveExpenseWallet = this.saveExpenseWallet.bind(this);
  }

  componentDidMount() {
    getCurrency().then((result) => this.getCurrencys(result));
  }

  getCurrencys(currents) {
    const listCurrents = Object.keys(currents).filter((current) => current !== 'USDT');
    this.setState({
      arrayCurrency: [...listCurrents],
    });
  }

  optionsCurrency() {
    const { arrayCurrency } = this.state;
    return arrayCurrency.map((currency, i) => (
      <option
        key={ i }
        value={ currency }
      >
        { currency }
      </option>
    ));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  createObjectExpense() {
    const { wallet } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const id = wallet.expenses.length;
    const objectExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: {},
    };
    return objectExpense;
  }

  saveExpenseWallet() {
    const { saveExpense } = this.props;
    const actualExpense = this.createObjectExpense();
    saveExpense(actualExpense);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            name="value"
            min="0"
            onChange={ (e) => this.handleChange(e) }
            value={ value }
          />
        </label>
        <label htmlFor="descrição">
          Descrição:
          <input
            id="descrição"
            type="text"
            name="description"
            onChange={ (e) => this.handleChange(e) }
            value={ description }
          />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            onChange={ (e) => this.handleChange(e) }
            value={ currency }
          >
            { this.optionsCurrency() }
          </select>
        </label>
        <Method value={ method } handleChange={ this.handleChange } />
        <Tag value={ tag } handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ () => this.saveExpenseWallet() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expense) => dispatch(fetchExchangesRatesApi(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterExpense);

EnterExpense.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.number,
  ),
};

EnterExpense.defaultProps = {
  wallet: [],
};
