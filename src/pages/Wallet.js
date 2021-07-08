import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Table from './Table';
import { fetchApi, saveExpense } from '../actions/index';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const avaibleTags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

const INITIAL_STATE = {
  id: 0,
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.changeState = this.changeState.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  saveExpense() {
    const { saveNewExpense, fetchAPI, currencies } = this.props;
    fetchAPI();
    saveNewExpense({ ...this.state, exchangeRates: currencies });
    this.setState((previousState) => ({ id: previousState.id + 1 }));
  }

  changeState({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies, expenses } = this.props;
    const coins = Object.keys(currencies).filter((coin) => coin !== 'USDT');

    return (
      <div>
        <Header />
        <form>
          <Input
            onChange={ this.changeState }
            type="number"
            value="value"
            label="Valor"
          />
          <Input
            onChange={ this.changeState }
            type="text"
            value="description"
            label="Descrição"
          />
          <Select
            onChange={ this.changeState }
            label="Moeda"
            value="currency"
            options={ coins }
          />
          <Select
            onChange={ this.changeState }
            options={ paymentMethods }
            label="Método de pagamento"
            value="method"
          />
          <Select
            onChange={ this.changeState }
            label="Tag"
            value="tag"
            options={ avaibleTags }
          />
          <button onClick={ this.saveExpense } type="button">
            Adicionar despesa
          </button>
          <Table expenses={ expenses } />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchApi()),
  saveNewExpense: (expense) => dispatch(saveExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.defaultProps = {
  currencies: {},
};

Wallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  saveNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape(PropTypes.object.isRequired),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
