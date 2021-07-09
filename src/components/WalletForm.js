import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletFetchedCurrencies from './WalletFetchedCurrencies';
import PaymentMethods from './PaymentMethods';
import TagCategories from './TagCategories';
import { updateCurrencyToNewExpense } from '../actions/wallet';

class WalletForm extends Component {
  constructor() {
    super();
    // this.state = {
    //   id: 0,
    //   value: 0,
    //   description: '',
    //   currency: 'USD',
    //   method: 'Dinheiro',
    //   tag: 'Alimentação',
    // }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderSelectInputs() {
    return (
      <>
        <label htmlFor="moeda">
          Moeda:
          <select
            id="moeda"
            name="currency"
            onChange={ this.handleChange }
          >
            <WalletFetchedCurrencies />
          </select>
        </label>
        <label htmlFor="metodo-de-pagamento">
          Método de pagamento:
          <select
            name="method"
            onChange={ this.handleChange }
            id="metodo-de-pagamento"
          >
            <PaymentMethods />
          </select>
        </label>
        <label htmlFor="categoria">
          Tag:
          <select
            id="categoria"
            name="tag"
            onChange={ this.handleChange }
          >
            <TagCategories />
          </select>
        </label>
      </>
    );
  }

  render() {
    const { state } = this;
    const { addNewExpense } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            name="value"
            type="number"
            onChange={ this.handleChange }
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            name="description"
            type="text"
            onChange={ this.handleChange }
            id="descricao"
          />
        </label>
        { this.renderSelectInputs() }
        <button type="button" onClick={ () => addNewExpense(state) }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (state) => dispatch(updateCurrencyToNewExpense(state)),
});

export default connect(null, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
  addNewExpense: PropTypes.func.isRequired,
};
