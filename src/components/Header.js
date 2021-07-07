import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, spends, exchange } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <h4 data-testid="total-field">{ spends }</h4>
        <h4 data-testid="header-currency-field">{ exchange }</h4>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  email: PropTypes.string.isRequired,
  spends: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};
