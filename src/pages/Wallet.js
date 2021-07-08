import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies } from '../actions/wallet';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesAPI } = this.props;
    fetchCurrenciesAPI();
  }

  render() {
    const { userEmail, loading } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{`Usuário: ${userEmail}`}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        { (loading) ? <p>Carregando...</p> : <WalletForm />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  loading: state.wallet.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesAPI: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  fetchCurrenciesAPI: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
