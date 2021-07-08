import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { showMail } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          Email:
          { showMail }
        </p>
        <p data-testid="total-field"> Despesas total R$ 0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showMail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  showMail: PropTypes.func.isRequired,
};
