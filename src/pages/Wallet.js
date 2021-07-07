import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      initialExpenses: 0,
      initialCurrencies: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { initialCurrencies, initialExpenses } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <div data-testid="total-field">{initialExpenses}</div>
          <div data-testid="header-currency-field">{initialCurrencies}</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.defaultProps = {
  email: '',
  // currencies: '',
  // expenses: 0,
};

Wallet.propTypes = {
  email: PropTypes.string,
  // currencies: PropTypes.string,
  // expenses: PropTypes.number,
};
