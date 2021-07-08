import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends Component {
  render() {
    const { getEmail, totalExpense } = this.props;
    const eachValue = totalExpense
      .map(({ exchangeRates, currency, value }) => (
        exchangeRates[currency].ask * Number(value)
      ));
    return (
      <div>
        <h5 data-testid="email-field">{getEmail}</h5>
        <p data-testid="total-field">
          {
            eachValue
              .reduce((acc, curr) => acc + Number(curr), 0)
          }
        </p>
        <select data-testid="header-currency-field">
          <option>BRL</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  totalExpense: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  totalExpense: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string,
    PropTypes.number])).isRequired,
};

export default connect(mapStateToProps)(Header);
