import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailState } = this.props;
    return (
      <header>
        <div>Hello, TrybeWallet!</div>
        <h2 data-testid="email-field">{ emailState }</h2>
        <div>
          Despesa Total: R$
          <span data-testid="total-field"> 0 </span>
          <span data-testid="header-currency-field"> BRL </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
