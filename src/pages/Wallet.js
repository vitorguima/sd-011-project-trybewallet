import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          {emailState}
        </h3>
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">0</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
