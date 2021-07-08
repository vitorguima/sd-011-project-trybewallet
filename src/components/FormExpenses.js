import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyTypes, saveExpenses } from '../actions';
import CurrencyTypes from './CurrencyTypes';

class FormExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clickSubmit() {
    const { id } = this.state;
    const { newExpense } = this.props;
    this.setState({ id: id + 1 });
    newExpense(this.state);
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input type="text" name="valor" id="valor" onChange={ this.handleChange } />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea name="descricao" id="descricao" onChange={ this.handleChange } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.handleChange }>
            <CurrencyTypes />
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="pagamento" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.clickSubmit }
        >
          Salvar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: () => dispatch(fetchCurrencyTypes()),
  newExpense: (expense) => dispatch(saveExpenses(expense)),
});

export default connect(null, mapDispatchToProps)(FormExpenses);

FormExpenses.propTypes = {
  fetchCurrency: PropTypes.func.isRequired,
  newExpense: PropTypes.func.isRequired,
};
