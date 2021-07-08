import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, newExpense } from '../actions';
import Valor from '../components/Valor';
import Descricao from '../components/Descricao';
import Moeda from '../components/Moeda';
import Pagamento from '../components/Pagamento';
import Tag from '../components/Tag';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      id: 0,
      totalExpenses: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  componentDidMount() {
    const { setCurrencies } = this.props;
    setCurrencies();
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addExpense() {
    const { value, description, currency, method, tag, id, totalExpenses } = this.state;
    const { setNewExpenses, setCurrencies, allCurrencies } = this.props;
    const expense = { id, value, description, currency, method, tag };
    setCurrencies();
    expense.exchangeRates = allCurrencies;
    setNewExpenses(expense);
    this.setState({
      totalExpenses: totalExpenses + (value * expense.exchangeRates[currency].ask),
      id: id + 1,
    });
  }

  render() {
    const { userEmail, allCurrencies } = this.props;
    const { value, description, currency, method, tag, totalExpenses } = this.state;
    const currencies = Object.keys(allCurrencies).filter((element) => element !== 'USDT'
     && element !== 'DOGE');
    return (
      <div>
        <header>
          <strong data-testid="email-field">{userEmail}</strong>
          <p data-testid="total-field">{totalExpenses}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <Valor value={ value } handleInput={ this.handleInput } />
          <Descricao description={ description } handleInput={ this.handleInput } />
          <Moeda
            currency={ currency }
            currencies={ currencies }
            handleInput={ this.handleInput }
          />
          <Pagamento method={ method } handleInput={ this.handleInput } />
          <Tag tag={ tag } handleInput={ this.handleInput } />
          <button type="button" onClick={ this.addExpense }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  userEmail: state.user.email,
  allCurrencies: state.wallet.currencies,
});

const MapDispatchToProps = (dispatch) => ({
  setCurrencies: () => dispatch(fetchAPI()),
  setNewExpenses: (expense) => dispatch(newExpense(expense)),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
}.isRequired;

export default connect(MapStateToProps, MapDispatchToProps)(Wallet);
