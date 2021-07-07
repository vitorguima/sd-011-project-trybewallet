import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <h5 data-testid="email-field">{getEmail}</h5>
        <p data-testid="total-field">0</p>
        <select data-testid="header-currency-field">
          <option>BRL</option>
        </select>
      </header>);
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
