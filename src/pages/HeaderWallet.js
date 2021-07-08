import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
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

HeaderWallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailState: state.user.email,
});

export default connect(mapStateToProps)(HeaderWallet);
