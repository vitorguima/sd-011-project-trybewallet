import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.btnAddExpense = this.btnAddExpense.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.renderTags = this.renderTags.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  btnAddExpense() {
    const { getCurrency } = this.props;
    getCurrency();
    const { expenses, id } = this.props;
    expenses(this.state, id);
  }

  // criando novos renders por conta da quantidade de linha ecedida
  renderPaymentMethod() {
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <label htmlFor="method">
        Método de Pagamento:
        <select name="method" id="method" onChange={ this.handleChange }>
          {methodPayment
            .map((payment, index) => <option key={ index }>{payment}</option>)}
        </select>
      </label>
    );
  }

  renderTags() {
    const tagOption = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="categories">
        Tag
        <select
          name="categories"
          id="categories"
          onChange={ this.handleChange }
        >
          {tagOption
            .map((category, index) => <option key={ index }>{category}</option>)}
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            id="value"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            { currencies
              .map((currencie, index) => <option key={ index }>{ currencie }</option>) }
          </select>
        </label>
        { this.renderPaymentMethod() }
        { this.renderTags() }
        <button
          type="button"
          onClick={ this.btnAddExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  id: state.wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: (state) => dispatch(fetchCurrencies(state)),
  expenses: (expenses, id) => dispatch(addExpenses(expenses, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  getCurrency: PropTypes.func,
}.isRequired;
