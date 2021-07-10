import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      expensesTotal: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { userEmail } = this.props;
    const { expensesTotal, currency } = this.state;

    return (
      <header>
        <span data-testid="email-field">
          Email:
          {userEmail}
        </span>
        <span data-testid="total-field">
          Despesa total:
          {expensesTotal}
        </span>
        <span data-testid="header-currency-field">{currency}</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string,
};

Header.defaultProps = {
  userEmail: '',
};

export default connect(mapStateToProps)(Header);
