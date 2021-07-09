import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SpendForm from '../components/SpendForm';
import ExpensesTable from '../components/ExpensesTable';
import { addExpense } from '../actions';
import fetchCurrencies from '../services';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acronymsCurrency: [],
      expenses: [],
    };
    this.setAcronymsCurrency = this.setAcronymsCurrency.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.setExpenses = this.setExpenses.bind(this);
    this.setSpends = this.setSpends.bind(this);
  }

  componentDidMount() {
    this.setExpenses();
    this.setAcronymsCurrency();
  }

  setExpenses() {
    const { expenses } = this.props;
    this.setState({
      expenses,
    });
  }

  setSpends() {
    const { expenses, spends: oldSpends } = this.state;
    const spends = expenses.reduce((
      (acc, { value, currency, exchangeRates }) => (
        acc + (parseFloat(value) * exchangeRates[currency].ask)
      )), 0);
    if (spends !== oldSpends) this.setState({ spends });
  }

  async setAcronymsCurrency() {
    const { fetchCurrencie } = this.props;
    await fetchCurrencie();
    const { currencies } = this.props;
    const acronyms = Object.keys(currencies[currencies.length - 1]);
    const acronymsCurrency = acronyms.filter((acron) => acron !== 'USDT');
    this.setState({
      acronymsCurrency,
    });
  }

  async addExpense(expense) {
    const { addNewExpense, fetchCurrencie, currencies } = this.props;
    const { expenses } = this.state;
    await fetchCurrencie();
    const newExpense = {
      id: (expenses.length),
      ...expense,
      exchangeRates: currencies[currencies.length - 1],
    };
    addNewExpense(newExpense);
    this.setExpenses();
    this.setSpends();
  }

  render() {
    const {
      acronymsCurrency,
    } = this.state;
    return (
      <div>
        <Header />
        <SpendForm acronyms={ acronymsCurrency } addExpense={ this.addExpense } />
        <ExpensesTable />
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
  addNewExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencie: PropTypes.func.isRequired,
};
