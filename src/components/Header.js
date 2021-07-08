import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Usuário:
          {' '}
          {userEmail}
        </p>
        <p>
          Gasto total:
          {' '}
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>

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
