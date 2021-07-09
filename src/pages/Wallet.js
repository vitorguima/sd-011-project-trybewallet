import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from './HeaderWallet';
import InputText from './InputText';
import Table from './Table';
import Select from './Select';
import { fetchApi, addNewExpense } from '../actions';

const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagTypes = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.sendToExpenses = this.sendToExpenses.bind(this);
    this.addRates = this.addRates.bind(this);
  }

  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  handleEvent({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async requestCurrenciesNow() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  async addRates() {
    const rates = await this.requestCurrenciesNow();
    this.setState({
      exchangeRates: rates,
    }, () => this.sendToExpenses());
  }

  sendToExpenses() {
    const { newExpense } = this.props;
    newExpense(this.state);
    const { id } = this.state;
    const newId = id + 1;
    this.setState({
      id: newId,
    });
  }

  render() {
    const { email, currencies, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <HeaderWallet email={ email } expenses={ expenses } />
        <form>
          <InputText
            id="value"
            label="Valor"
            onChange={ this.handleEvent }
            valor={ value }
            type="number"
          />
          <InputText
            id="description"
            label="Descrição"
            onChange={ this.handleEvent }
            valor={ description }
            type="text"
          />
          <Select
            id="currency"
            label="Moeda"
            arrayBd={ currencies }
            onChange={ this.handleEvent }
            valor={ currency }
          />
          <Select
            id="method"
            label="Método de pagamento"
            arrayBd={ paymentMethod }
            onChange={ this.handleEvent }
            valor={ method }
          />
          <Select
            id="tag"
            label="Tag"
            arrayBd={ tagTypes }
            onChange={ this.handleEvent }
            valor={ tag }
          />
        </form>
        <button type="button" onClick={ this.addRates }>Adicionar despesa</button>
        <Table expenses={ expenses } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(fetchApi()),
  newExpense: (expense) => dispatch(addNewExpense(expense)),
});

Wallet.propTypes = {
  requestCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  email: PropTypes.string.isRequired,
  newExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
