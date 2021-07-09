import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TagSelector from './TagSelector';
import { addExpense, calculateExpenses } from '../actions';
import fetchApi from '../services';

class ExpensesForm extends Component {
  constructor(props) {
    super(props);
    const { currencies } = props;
    this.state = {
      currencies: [...currencies],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendInformation = this.sendInformation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async sendInformation() {
    const { expenses, addNewExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const exchangeRates = await fetchApi();
    const obj = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    addNewExpense(obj);
    this.convertAndSendExpense(value, currency);
    this.setState({
      value: 0,
      description: '',
    });
  }

  convertAndSendExpense(value, currency) {
    const { currencies, calculateTotalExpenses } = this.props;
    const valueToConvert = value;
    const quotation = currencies.find(({ code }) => code === currency);
    const convertedValue = Math.round(valueToConvert * quotation.ask * 100) / 100;
    calculateTotalExpenses(convertedValue);
  }

  render() {
    const { currencies, value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            onChange={ this.handleChange }
            value={ value }
            id="value"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            onChange={ this.handleChange }
            value={ description }
            id="description"
          />
        </label>
        <label htmlFor="currency-selector">
          Moeda
          <select name="currency" onChange={ this.handleChange } id="currency-selector">
            {currencies.map(({ code }) => (
              <option key={ code } value={ code }>{ code }</option>
            ))}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="payment-method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <TagSelector change={ this.handleChange } />
        <button onClick={ this.sendInformation } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (payload) => dispatch(addExpense(payload)),
  calculateTotalExpenses: (payload) => dispatch(calculateExpenses(payload)),
});

ExpensesForm.propTypes = ({
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNewExpense: PropTypes.func.isRequired,
  calculateTotalExpenses: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
