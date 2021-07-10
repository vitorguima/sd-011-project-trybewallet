import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SubmitForm from './SubmitForm';
import FormCurrencies from './FormCurrencies';
import FormValue from './FormValue';
import FormDescription from './FormDescription';
import * as userActions from '../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.setCurrenciesState = this.setCurrenciesState.bind(this);

    const { currencies } = props;

    this.state = {
      id: 0,
      value: 0,
      description: '',
      paymentType: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
      exchangeRates: currencies[0],
    };
  }

  setCurrenciesState(newCurrencies) {
    this.setState({
      exchangeRates: newCurrencies,
    });
  }

  resetState() {
    const { id } = this.state;
    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      paymentType: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    });
  }

  handleClick() {
    const { value, description, paymentType, tag, currency, exchangeRates } = this.state;
    const { addNewExpense } = this.props;
    const newExpense = {
      value,
      description,
      paymentType,
      tag,
      currency,
      exchangeRates,
    };
    addNewExpense(newExpense);
    this.resetState();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputs({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, paymentType, tag, currency } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <FormValue value={ value } handleInputs={ this.handleInputs } />
        <FormDescription description={ description } handleInputs={ this.handleInputs } />
        <label htmlFor="payment-type">
          Método de Pagamento
          <select
            id="payment-type"
            name="paymentType"
            value={ paymentType }
            onChange={ this.handleInputs }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-type">
          Tag
          <select
            id="expense-type"
            name="tag"
            value={ tag }
            onChange={ this.handleInputs }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <FormCurrencies
          handleInputs={ this.handleInputs }
          value={ currency }
        />
        <SubmitForm
          handleClick={ this.handleClick }
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (newExpense) => dispatch(userActions.newExpense(newExpense)),
  fetchCurrencies: () => dispatch(userActions.fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  addNewExpense: PropTypes.func,
}.isRequired;
