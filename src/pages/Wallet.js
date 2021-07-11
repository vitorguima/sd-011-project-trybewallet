import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header className="header">
          <h1 className="header-title">TrybeWallet</h1>
          <p className="header-email" data-testid="email-field">
            Email:
            {email}
          </p>
          <p data-testid="total-field">Despesa total: R$ 0</p>
          <select data-testid="header-currency-field">
            <option value="valor1">BRL</option>
          </select>
        </header>
        <div>
          <div className="money-icon-container" />
          <ExpenseForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
