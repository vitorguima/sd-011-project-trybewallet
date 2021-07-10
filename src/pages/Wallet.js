import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailGot } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          { emailGot }
        </span>
        <span data-testid="total-field">
          Despesa Total: R$ 0
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
});

Header.propTypes = {
  emailGot: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
