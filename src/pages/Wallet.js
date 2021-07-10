import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk, addExpense, removeExpense } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const { reqApiAction } = this.props;
    await reqApiAction();
    const { currencies } = this.props;
    this.setState({ currency: Object.keys(currencies)[0] });
  }

  handleChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  handleId() {
    const { id } = this.state;
    this.setState({ id: id + 1 });
  }

  createInput(name, label, stateKey) {
    return (
      <label htmlFor={ name }>
        { label }
        <input
          id={ name }
          type="text"
          name={ name }
          onChange={ this.handleChange }
          value={ stateKey }
        />
      </label>
    );
  }

  createSelect(name, label, arraySelect, stateKey) {
    return (
      <label htmlFor={ name }>
        { label }
        <select
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

  totalExpenses(expenses) {
    const total = expenses.reduce((acc, expense) => (
      acc + expense.value * expense.exchangeRates[expense.currency].ask), 0);
    return (Math.round(total * 100) / 100);
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

  renderExpensesTable() {
    const { expenses, removeExpenseAction } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ Math.round(exp.value * 100) / 100 }</td>
              <td>{ exp.exchangeRates[exp.currency].name.split('/')[0] }</td>
              <td>{ Math.round(exp.exchangeRates[exp.currency].ask * 100) / 100 }</td>
              <td>
                { (Math.round(
                  (exp.value * exp.exchangeRates[exp.currency].ask) * 100,
                )) / 100 }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => removeExpenseAction(exp) }
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { value, description, currency, method, tag } = this.state;
    const { currencies, loadingCurrencies, addExpenseAction, reqApiAction } = this.props;

    const currenciesArray = Object.keys(currencies).filter((currency) => currency !== 'USDT');

    return (
      <div>
        { this.renderHeader() }
        <h3>TrybeWallet</h3>
        { loadingCurrencies ? <p>Carregando...</p> : (
          <form>
            { this.createInput('value', 'Valor', value) }
            { this.createInput('description', 'Descrição', description) }
            { this.createSelect('currency', 'Moeda', currenciesArray, currency) }
            { this.createSelect('method', 'Método de pagamento', payments, method) }
            { this.createSelect('tag', 'Tag', tags, tag) }
            <button
              type="button"
              onClick={ () => {
                this.handleId();
                reqApiAction();
                addExpenseAction(this.state);
              } }
            >
              Adicionar despesa
            </button>
          </form>
        )}
        { this.renderExpensesTable() }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = ({
  userEmail: PropTypes.string,
  currencies: PropTypes.shape({ Object }),
  loadingCurrencies: PropTypes.bool,
}).isRequired;
