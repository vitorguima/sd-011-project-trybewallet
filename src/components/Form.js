import React from 'react';
import SubmitForm from './SubmitForm';
import FormCurrencies from './FormCurrencies';
import FormValue from './FormValue';
import FormDescription from './FormDescription';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 0,
      description: '',
      paymentType: '',
      tag: '',
      currency: '',
    };
  }

  handleSubmit(e) {
    const { value, description, paymentType, tag, currency, addNewExpense } = this.state;
    const newExpense = {
      value,
      description,
      paymentType,
      tag,
      currency,
    };

    e.preventDefault();
    addNewExpense(newExpense);
  }

  handleInputs({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, paymentType, tag, currency } = this.state;
    return (
      <form>
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
          value={ value }
          description={ description }
          paymentType={ paymentType }
          tag={ tag }
          currency={ currency }
          onSubmit={ this.handleSubmit }
        />
      </form>
    );
  }
}

export default ExpenseForm;
