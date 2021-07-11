import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, totalExpense } = this.props;
    console.log(totalExpense);
    return (
      <div>
        <header>
          <h1>Wallet</h1>
          <div>
            <p data-testid="email-field">{ userEmail }</p>
            <p data-testid="total-field">
              <span data-testid="header-currency-field">BRL</span>
              { totalExpense }
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpense: state.wallet.totalExpense,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
