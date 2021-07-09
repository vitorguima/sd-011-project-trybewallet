import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  expenses,
  description,
  currency,
  paymentMethod,
  category,
} from '../walletComponents/walletElements';
import { fetchCurrencies, fetchToExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handlerInputChange = this.handlerInputChange.bind(this);
    this.addExpenseToGlobal = this.addExpenseToGlobal.bind(this);
    this.sumTotalOfExpenses = this.sumTotalOfExpenses.bind(this);
  }

  componentDidMount() {
    const { request } = this.props;
    request();
  }

  handlerInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  addExpenseToGlobal() {
    const { requestExpenses, userExpense } = this.props;
    let id = 0;
    if (userExpense.length > 0) {
      id = userExpense[userExpense.length - 1].id + 1;
    }

    requestExpenses({ ...this.state, id });
  }

  sumTotalOfExpenses() {
    const { userExpense } = this.props;

    let total = 0;

    userExpense.forEach((expense) => {
      const { exchangeRates } = expense;

      const conversionRate = {
        userValueInput: Number(expense.value),
        currValueOfCurrency: Number(exchangeRates[expense.currency].ask),
      };

      const { userValueInput, currValueOfCurrency } = conversionRate;
      const num = userValueInput * currValueOfCurrency;
      total += num;
    });
    return total;
  }

  render() {
    const { email, currencies } = this.props;
    // const currentExpense = userExpense;
    return (
      <div
        className="main-page"
      >
        <section>
          <div className="title">TrybeWallet</div>
          <p data-testid="email-field">{email}</p>
          <p
            data-testid="total-field"
          >
            { this.sumTotalOfExpenses() }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
        <form>
          {expenses(this.handlerInputChange)}
          {description(this.handlerInputChange)}
          {currency(currencies, this.handlerInputChange)}
          {paymentMethod(this.handlerInputChange)}
          {category(this.handlerInputChange)}
          <button
            type="button"
            className="add-expense"
            onClick={ () => this.addExpenseToGlobal() }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  userExpense: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(fetchCurrencies()),
  requestExpenses: (forms) => dispatch(fetchToExpenses(forms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  request: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  userExpense: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestExpenses: PropTypes.func.isRequired,
};
