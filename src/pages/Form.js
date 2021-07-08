import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { funcEditExpenses, updateEditExpenses } from '../actions';

let buttonChange = false;
const food = 'Alimentação';

class Form extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.keepExpense = this.keepExpense.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
  }

  componentDidMount() {
    const { funcEditExpense } = this.props;
    funcEditExpense(this.keepExpense);
  }

  keepExpense(param) {
    const { expenses } = this.props;
    const lookingFor = expenses.find(({ id }) => id === param.id);
    this.setState({
      id: lookingFor.id,
      value: lookingFor.value,
      description: lookingFor.description,
      currency: lookingFor.currency,
      method: lookingFor.method,
      tag: lookingFor.tag,
      exchangeRates: lookingFor.exchangeRates,
    });
    buttonChange = true;
  }

  updateExpense() {
    const { updateEditExpense, expenses } = this.props;
    updateEditExpense(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: food,
      exchangeRates: {},
    });
    buttonChange = false;
  }

  createMoeda() {
    const { coins } = this.props;
    const { currencies } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          value={ currencies }
          onChange={ this.handleChange }
        >
          {coins.map((coin, index) => (
            <option value={ coin } key={ index }>{coin}</option>))}
        </select>
      </label>
    );
  }

  createMetodo() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          data-testid="method-input"
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de Crédito</option>
          <option value="Cartão de débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  createTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          data-testid="tag-input"
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { funcCoins, expenses } = this.props;
    funcCoins(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    });
  }

  render() {
    const { value, description } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor
            <input
              data-testid="value-input"
              type="text"
              name="value"
              id="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {this.createMoeda()}
          {this.createMetodo()}
          {this.createTag()}
        </form>
        {
          buttonChange ? (
            <button
              type="button"
              onClick={ this.updateExpense }
            >
              Editar despesa
            </button>
          ) : (
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar despesas
            </button>)
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcEditExpense: (funcEdit) => dispatch(funcEditExpenses(funcEdit)),
  updateEditExpense: (object) => dispatch(updateEditExpenses(object)),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  coins: PropTypes.array,
}.isRequired;
