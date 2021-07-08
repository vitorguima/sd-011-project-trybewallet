import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const exchangeRate = expenses
      .map((v) => Number(v.exchangeRates[v.currency].ask) * Number(v.value));
    return (
      <div>
        <h5 data-testid="email-field">
          Logado como:
          { email }
        </h5>
        <h5 data-testid="header-currency-field">
          Despesa total:
          <span data-testid="total-field">
            {exchangeRate.reduce((acc, curr) => {
              acc += curr;
              return acc;
            }, 0)}
          </span>
          BRL
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
