import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <header>
          <h1>Wallet</h1>
          <div>
            <p data-testid="email-field">{ userEmail }</p>
            <p data-testid="total-field">
              <span data-testid="header-currency-field">BRL</span>
              0
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
