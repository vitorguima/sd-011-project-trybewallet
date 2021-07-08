import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormOne from '../components/FormOne';
import FormTwo from '../components/FormTwo';
import FormThree from '../components/FormThree';
import { expenseAction } from '../actions';
import { fetchDataTwo } from '../actions/fetchTwo';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleState = this.handleState.bind(this);
    this.handleExpenses = this.handleExpenses.bind(this);
    this.handleTotalExpensesValue = this.handleTotalExpensesValue.bind(this);
  }

  handleState({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleExpenses() {
    const { sendFetchTwo, expenses } = this.props;
    let id = 0;
    if(expenses.length !== 0) {
      id = expenses[expenses.length - 1].id + 1;
    }
    sendFetchTwo({ ...this.state, id });
  }

  handleTotalExpensesValue() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);
    return totalValue;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <span data-testid="total-field">{ this.handleTotalExpensesValue() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <FormOne handleState={ this.handleState } />
          <FormTwo handleState={ this.handleState } />
          <FormThree handleState={ this.handleState } />
          <button
            type="button"
            onClick={ () => this.handleExpenses() }
          >
            Adicionar despesa
          </button>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (expense) => dispatch(expenseAction(expense)),
  sendFetchTwo: (dataForm) => dispatch(fetchDataTwo(dataForm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
