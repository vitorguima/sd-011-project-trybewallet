import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    const { userEmail, total } = this.props;
    return (
      <div>
        <header>
          <p>
            <span>Usuario: </span>
            <span data-testid="email-field">{ userEmail }</span>
          </p>
          <p>
            <span>Despesa Total: </span>
            <span data-testid="total-field">{ total || 0 }</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <FormWallet />
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  userEmail: user.email,
  total: wallet.total,
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
  total: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
