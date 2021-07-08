import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, changeExpense, edtExpense, addCurencies } from '../actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.button = this.button.bind(this);
    this.edtForm = this.edtForm.bind(this);
  }

  componentDidMount() {
    const { addCoins } = this.props;
    addCoins();
  }

  handleChange({ target: { name, value } }) {
    console.log(name, value);
    this.setState({ [name]: value });
  }

  header() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses.reduce((acc, { currency, value, exchangeRates }) => {
        const findCoin = Object.entries(exchangeRates).find(([key]) => key === currency);
        return acc + (Number(value) * Number(findCoin[1].ask));
      }, 0);
    }
    return (
      <header>
        <div>
          <span data-testid="email-field">{email}</span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>);
  }

  tag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          data-testid="tag-input"
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option name="tag">Alimentação</option>
          <option name="tag">Lazer</option>
          <option name="tag">Trabalho</option>
          <option name="tag">Transporte </option>
          <option name="tag">Saúde</option>
        </select>
      </label>);
  }

  valor() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          data-testid="value-input"
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>);
  }

  moeda() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          data-testid="currency-input"
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {currencies.length > 0
            && currencies.map((coin) => (
              <option key={ coin } value={ coin } name="currency">{coin}</option>))}
        </select>
      </label>
    );
  }

  submitForm() {
    const { submitAddExpense, expenses } = this.props;
    const { value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    let id = 0;
    if (expenses.length > 0) {
      id = expenses[expenses.length - 1].id + 1;
    }
    const obj = { value, description, currency, method, tag, id };
    const resetState = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação' };
    submitAddExpense(obj);
    this.setState(resetState);
  }

  edtForm() {
    const { toEdit, changeEdtExpense, expenses, editExpense } = this.props;
    const { value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const id = toEdit;
    const { exchangeRates } = expenses.find((expense) => expense.id === toEdit);
    const obj = { value, description, currency, method, tag, id, exchangeRates };
    const resetState = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
    changeEdtExpense(toEdit, obj);
    editExpense('');
    this.setState(resetState);
  }

  button() {
    const { description } = this.state;
    const { toEdit, expenses } = this.props;
    if (toEdit !== '' && description === '') {
      const editedExpense = expenses.find(({ id }) => id === toEdit);
      this.setState(editedExpense);
    }
    return toEdit !== '' ? (
      <button
        type="button"
        onClick={ this.edtForm }
      >
        Editar despesa
      </button>
    ) : (
      <button
        type="button"
        onClick={ this.submitForm }
      >
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { description, method } = this.state;
    return (
      <main>
        {this.header()}
        <form>
          {this.valor()}
          <label htmlFor="description">
            Descrição
            <input
              data-testid="description-input"
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {this.moeda()}
          <label htmlFor="method">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option name="method">Dinheiro</option>
              <option name="method">Cartão de crédito</option>
              <option name="method">Cartão de débito</option>
            </select>
          </label>
          { this.tag() }
          { this.button() }
        </form>
        <Table />
      </main>);
  }
}
Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  submitAddExpense: PropTypes.func.isRequired,
  changeEdtExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  toEdit: PropTypes.number,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCoins: PropTypes.func.isRequired,
};
Wallet.defaultProps = {
  toEdit: '',
};
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  toEdit: wallet.toEdit,
  currencies: wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  submitAddExpense: (expense) => dispatch(addExpenses(expense)),
  changeEdtExpense: (id, object) => dispatch(changeExpense(id, object)),
  editExpense: (id) => dispatch(edtExpense(id)),
  addCoins: () => dispatch(addCurencies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
