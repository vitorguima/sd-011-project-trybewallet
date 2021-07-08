import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SpendForm from '../components/SpendForm';
import { addExpense } from '../actions';
import fetchCurrencies from '../services';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      spends: 0,
      exchange: 'BRL',
      acronymsCurrency: [],
    };
    this.setEmail = this.setEmail.bind(this);
    this.setAcronymsCurrency = this.setAcronymsCurrency.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.setExpenses = this.setExpenses.bind(this);
  }

  componentDidMount() {
    const { email, expenses, currencies } = this.props;
    this.setEmail(email);
    this.setExpenses(expenses);
    this.setAcronymsCurrency(currencies[currencies.length - 1]);
  }

  setExpenses(expenses) {
    this.setState({
      expenses,
    });
  }

  setEmail(email) {
    this.setState({
      email,
    });
  }

  setAcronymsCurrency(dataExchange) {
    const acronyms = Object.keys(dataExchange);
    const acronymsCurrency = acronyms.filter((acron) => acron !== 'USDT');
    this.setState({
      acronymsCurrency,
    });
  }

  addExpense(expense) {
    const { addNewExpense, fetchCurrencie } = this.props;
    const { expenses } = this.state;
    const newExpense = { id: (expenses.length), ...expense };
    addNewExpense(newExpense);
    fetchCurrencie();
  }

  render() {
    const {
      email,
      spends,
      exchange,
      acronymsCurrency,
    } = this.state;
    return (
      <div>
        <Header email={ email } spends={ spends } exchange={ exchange } />
        <SpendForm acronyms={ acronymsCurrency } addExpense={ this.addExpense } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addNewExpense: (expense) => dispatch(addExpense(expense)),
  fetchCurrencie: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencie: PropTypes.func.isRequired,
};
