import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h5 data-testid="email-field">
          Logado como:
          { email }
        </h5>
        <h5 data-testid="header-currency-field">
          Despesa total:
          <span data-testid="total-field"> 0.00</span>
          BRL
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
