import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWallet: 0,
      exchange: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalWallet, exchange } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <p data-testid="total-field">
          Despesa total:
          { totalWallet }
        </p>
        <p data-testid="header-currency-field">
          { exchange }
        </p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;
