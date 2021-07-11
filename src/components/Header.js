import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './header.css';

class Header extends React.Component {
  constructor() {
    super();

    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.value)
      * parseFloat(curr.exchangeRates[curr.currency].ask), 0);
    console.log(total);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h2 className="header-title">My Wallet</h2>
        <div className="header-info">
          <p className="info-item" data-testid="email-field">
            Email:
            {' '}
            { email }
          </p>
          <p className="info-item" data-testid="total-field">
            Total de Despesas: R$
            { this.getTotal() }
          </p>
          <p className="info-item" data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
