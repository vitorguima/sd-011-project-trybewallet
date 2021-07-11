import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { email, currencies } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <h1>TrybeWallet</h1>
          <h3>{email}</h3>
        </header>
        <div data-testid="total-field">
          Total: 0
        </div>
        <div data-testid="header-currency-field">
          Câmbio: BRL
        </div>
        <Form />
        <button
          type="button"
          onClick={ () => console.log(currencies) }
        >
          Console log
        </button>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Wallet);
