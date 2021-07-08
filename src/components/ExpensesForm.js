import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from '../actions/index';

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  saveExpense() {
    const { saveExpense } = this.props;
    saveExpense(this.state);
    return false;
  }

  renderValueIput() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurencyInput() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          type="text"
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
    );
  }

  rendermethodInput() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          type="text"
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagInput() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          type="text"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form type="submit">
        <h1>Adicone nova despesa</h1>
        {this.renderValueIput()}
        {this.renderDescriptionInput()}
        {this.renderCurencyInput()}
        {this.rendermethodInput()}
        {this.renderTagInput()}
        <button type="button" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (data) => dispatch(addExpense(data)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.array,
  saveExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
