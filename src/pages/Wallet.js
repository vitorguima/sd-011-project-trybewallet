import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const coins = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await coins.json();
    this.setState({ coins: Object.entries(response).filter(([key]) => key !== 'USDT') });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
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
      </header>
    );
  }

  tag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handleChange } value={ tag }>
          <option name="tag">Alimentação</option>
          <option name="tag">Lazer</option>
          <option name="tag">Trabalho</option>
          <option name="tag">Transporte </option>
          <option name="tag">Saúde</option>
        </select>
      </label>
    );
  }

  valor() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  moeda() {
    const { coins, currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          {coins && coins.map(([key, { name, code }]) => (
            <option key={ name } value={ code } name="currency">{key}</option>
          ))}
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
      coins } = this.state;
    const obj = { value, description, currency, method, tag, id: expenses.length };
    const resetState = {
      coins,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    submitAddExpense(obj);
    this.setState(resetState);
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
          <button
            type="button"
            onClick={ this.submitForm }
          >
            Adicionar despesa
          </button>
        </form>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  submitAddExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  submitAddExpense: (expense) => dispatch(addExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
