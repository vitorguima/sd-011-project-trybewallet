import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <label htmlFor="email-field">
          Email:
          <span data-testid="email-field">{ userEmail }</span>
        </label>
        <label htmlFor="total-field">
          Total de gastos: $
          <span data-testid="total-field">{ 0 }</span>
        </label>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { userEmail: state.user.email }
);

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string,
};

Header.defaultProps = {
  userEmail: 'alguem@algo.com',
};
