import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const total = this.props.expenses.reduce((acc, current) => {
      return acc + current
    }, 0);
    return(
      <header>
        <p data-testid="email-field">{this.props.email}</p>
        <p data-testid="total-field">{total}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    ) 
  }
}


const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
})

export default connect(mapStateToProps)(Wallet);
