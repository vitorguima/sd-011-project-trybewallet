import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TrybewalletForm from '../components/TrybewalletForm';
import ExpenseTable from '../components/ExpenseTable';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses, editMode } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses.map(({ value, currency, exchangeRates }) => {
        const { [currency]: { ask } } = exchangeRates;
        return value * ask;
      });
      total = total.reduce(
        (accumulator, value) => accumulator + value,
        0,
      ).toFixed(2);
    }
    return (
      <div className="trybewallet-page">
        <header className="trybewallet-header">
          <p data-testid="email-field">{ `Email de login: ${email}` }</p>
          <p>
            {'Despesa total: '}
            <span data-testid="total-field">{ total }</span>
          </p>
          <p>
            {'Câmbio utilizado: '}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        { editMode ? <EditForm /> : <TrybewalletForm /> }
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editMode: state.wallet.editMode,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  editMode: PropTypes.bool,
};

Wallet.defaultProps = {
  editMode: false,
};

export default connect(mapStateToProps)(Wallet);
