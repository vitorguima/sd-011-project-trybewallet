import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk, addExpense, removeExpense, editExpense } from '../actions';
import ExpensesTable from '../components/ExpensesTable';
// import ExpenseAdd from '../components/ExpenseAdd'

const initialState = {
  id: 0,
  value: '',
  description: '',
  currency: '',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: '',
  isEditing: false,
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.btnAddExpense = this.btnAddExpense.bind(this);
    this.openExpense = this.openExpense.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { reqApiAction } = this.props;
    await reqApiAction();
    const { currencies } = this.props;
    this.setState({ currency: Object.keys(currencies)[0], isEditing: false });
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  totalExpenses(expenses) {
    const total = expenses.reduce((acc, exp) => (
      acc + exp.value * exp.exchangeRates[exp.currency].ask), 0);
    return (Math.round(total * 100) / 100);
  }

  btnAddExpense(expense) {
    const { reqApiAction, addExpenseAction, currencies } = this.props;
    reqApiAction();
    addExpenseAction(expense);
    this.setState(initialState);
    this.setState({ currency: Object.keys(currencies)[0] });
  }

  btnEditExpense(expense) {
    const { editExpenseAction, currencies, expenses } = this.props;
    console.log(expenses);
    const teste = expenses;
    const oldExpense = teste.findIndex((exp) => exp.id === expense.id);
    teste.splice(oldExpense, 1, expense);
    console.log(oldExpense);
    console.log(expenses);
    editExpenseAction(expenses);
    this.setState(initialState);
    this.setState({ currency: Object.keys(currencies)[0], isEditing: false });
  }

  openExpense(expense) {
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    this.setState({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
      isEditing: true,
    });
  }

  renderHeader() {
    const { userEmail, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">
          { expenses.length > 0 ? this.totalExpenses(expenses) : 0}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  createInput(name, label, stateKey, dataTestId) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          data-testid={ dataTestId }
          id={ name }
          type="text"
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        />
      </label>
    );
  }

  createSelect(name, label, arraySelect, stateKey, dataTestId) {
    return (
      <label htmlFor={ name }>
        { label }
        <select
          data-testid={ dataTestId }
          id={ name }
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        >
          { arraySelect.map((item, index) => (
            <option key={ `${name}-${index}` } value={ item }>{ item }</option>
          ))}
        </select>
      </label>
    );
  }

  renderExpenseForm() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const currArray = Object.keys(currencies).filter((curr) => curr !== 'USDT');
    const expenseForm = { value, description, currency, method, tag };

    return (
      <form>
        { this.createInput('value', 'Valor', value, 'value-input') }
        { this.createInput('description', 'Descrição', description, 'description-input') }
        { this.createSelect('currency', 'Moeda', currArray, currency, 'currency-input') }
        { this.createSelect('method', 'Método de pagamento', payments, method, 'method-input') }
        { this.createSelect('tag', 'Tag', tags, tag, 'tag-input') }
        <button
          type="button"
          onClick={ () => this.btnAddExpense(expenseForm) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }

  renderExpenseEdit() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { id, value, description, currency, method, tag, exchangeRates } = this.state;
    const { currencies } = this.props;
    const currArray = Object.keys(currencies).filter((curr) => curr !== 'USDT');
    const expenseForm = { id, value, description, currency, method, tag, exchangeRates };

    return (
      <form>
        { this.createInput('value', 'Valor', value, 'value-input') }
        { this.createInput('description', 'Descrição', description, 'description-input') }
        { this.createSelect('currency', 'Moeda', currArray, currency, 'currency-input') }
        { this.createSelect('method', 'Método de pagamento', payments, method, 'method-input') }
        { this.createSelect('tag', 'Tag', tags, tag, 'tag-input') }
        <button
          type="button"
          onClick={ () => this.btnEditExpense(expenseForm) }
        >
          Editar despesa
        </button>
      </form>
    );
  }


  render() {
    const { loadingCurrencies } = this.props;
    const { isEditing } = this.state;
    return (
      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
        { loadingCurrencies ? <p>Carregando...</p> : isEditing ? this.renderExpenseEdit() : this.renderExpenseForm() }
        <ExpensesTable openExpense={ this.openExpense } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  loadingCurrencies: state.wallet.isLoading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  reqApiAction: () => dispatch(fetchApiThunk()),
  addExpenseAction: (payload) => dispatch(addExpense(payload)),
  removeExpenseAction: (payload) => dispatch(removeExpense(payload)),
  editExpenseAction: (payload) => dispatch(editExpense(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  userEmail: PropTypes.string,
  currencies: PropTypes.shape({ Object }),
  loadingCurrencies: PropTypes.bool,
}).isRequired;
