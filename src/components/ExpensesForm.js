import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchApi, addExpense } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  componentDidMount() {
    const { dispatchFetchApi } = this.props;
    dispatchFetchApi();
  }

  handleInput(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { expenses, dispatchAddExpense } = this.props;
    dispatchAddExpense(this.state);
    this.setState({
      id: expenses.length + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor:
        <input
          type="number"
          name="value"
          id="value"
          value={ value }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          name="currency"
          id="currency"
          value={ currency }
          onChange={ this.handleInput }
        >
          {Object.keys(currencies)
            .filter((curr) => curr !== 'USDT')
            .map((curr) => (
              <option key={ curr } value={ curr }>{ curr }</option>
            ))}
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleInput }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          value={ tag }
          onChange={ this.handleInput }
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

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleInput }
        />
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderValue() }
        { this.renderCurrency() }
        { this.renderMethod() }
        { this.renderTag() }
        { this.renderDescription() }
        <button type="button" onClick={ this.addExpense }>
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchApi: (state) => dispatch(fetchApi(state)),
  dispatchAddExpense: (expense) => dispatch(addExpense(expense)),
});

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchFetchApi: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchAddExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
