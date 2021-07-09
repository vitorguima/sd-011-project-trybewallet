import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const { walletExpenses } = this.props;
    console.log(walletExpenses);
    const total = walletExpenses.reduce((acc, curr) => acc + curr, 0);
    if (!total) return 0;
    return total;
  }

  render() {
    const { userEmail } = this.props;
    const total = this.calculateTotal();
    return (
      <header>
        <div data-testid="email-field">
          {userEmail}
        </div>
        <section data-testid="total-field">
          {total}
        </section>
        <section data-testid="header-currency-field">
          Moeda atual:BRL
        </section>
      </header>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
