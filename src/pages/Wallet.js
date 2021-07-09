import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../component/WalletForm';
import { fetchCurrenciesApi } from '../actions';
import '../App.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchThunk } = this.props;
    fetchThunk();
  }

  render() {
    const { emailUser } = this.props;
    return (
      <div className="wallet">
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">
            Olá:
            { emailUser }
          </h2>
          <label htmlFor="expenses">
            Despesas:
            <input data-testid="total-field" type="number" value="0" />
            <input data-testid="header-currency-field" type="text" value="BRL" />
          </label>
        </header>
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ emailUser: state.user.email });

const mapDispatchToProps = (dispatch) => ({
  fetchThunk: () => dispatch(fetchCurrenciesApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
  fetchThunk: PropTypes.func.isRequired,
};
