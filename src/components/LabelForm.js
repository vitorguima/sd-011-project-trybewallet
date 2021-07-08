import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpenses } from '../actions';

let buttonChange = false;

class LabelForm extends Component {
  constructor(props) {
    super(props);
    const { expenses } = this.props;
    this.state = {
      id: expenses.length,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectMethod = this.selectMethod.bind(this);
    this.select = this.select.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
  }

  componentDidMount() {
    const { edit } = this.props;
    edit(this.editForm);
  }

  editForm(editId) {
    const { expenses } = this.props;

    const value = expenses.find(({ id }) => id === editId);
    this.setState({
      id: value.id,
      value: value.value,
      description: value.description,
      currency: value.currency,
      method: value.method,
      tag: value.tag,
      exchangeRates: value.exchangeRates,
    });
    buttonChange = true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handlerClick() {
    const { getApi, expenses } = this.props;
    getApi(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    });
  }

  selectMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option> Metodo de pagamento! </option>
          <option value="Dinheiro">Dinheiro </option>
          <option value="Cartão de crédito">Cartão de crédito </option>
          <option value="Cartão de débito">Cartão de débito </option>
        </select>
      </label>
    );
  }

  select() {
    const { coins } = this.props;
    const { currency, tag } = this.state;

    return (
      <>
        <label htmlFor="Tag">
          Tag
          <select
            id="Tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação"> Alimentação </option>
            <option value="Lazer"> Lazer </option>
            <option value="Trabalho"> Trabalho </option>
            <option value="Transporte"> Transporte </option>
            <option value="Saúde"> Saúde </option>
          </select>
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {coins.map((coin, key) => (
              <option
                key={ key }
                value={ coin }
              >
                { coin }
              </option>))}
          </select>
        </label>
      </>
    );
  }

  handleExpense() {
    const { getApi, expenses } = this.props;
    getApi(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentacao',
      exchangeRates: {},
    });
    buttonChange = false;
  }

  render() {
    const { value, description } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            id="descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.select()}
        {this.selectMethod()}
        { buttonChange
          ? <button type="button" onClick={ this.handleExpense }>Editar despesa</button>
          : (
            <button
              type="button"
              onClick={ this.handlerClick }
            >
              Adicionar despesa
            </button>)}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  edit: (editFunc) => dispatch(editExpenses(editFunc)),
});

export default connect(null, mapDispatchToProps)(LabelForm);

LabelForm.propTypes = {
  coins: PropTypes.array,
  getApi: PropTypes.func,
  expenses: PropTypes.array,
}.isRequired;
