import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/walletActionsAPI';
import Forms from './Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { getEmail } = this.props;
    return (
      <div>
        TrybeWallet
        <header data-testid="email-field">
          <div>
            { getEmail }
          </div>
          <div data-testid="total-field">Despesa Total R$: 0 </div>
          <div data-testid="header-currency-field">Câmbio: BRL </div>
        </header>
        <Forms />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
