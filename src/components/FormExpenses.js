import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyTypes } from '../actions';
import CurrencyTypes from './CurrencyTypes';

class FormExpenses extends Component {
  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea name="descricao" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda">
            <CurrencyTypes />
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyTypes()),
});

export default connect(null, mapDispatchToProps)(FormExpenses);

FormExpenses.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
};
