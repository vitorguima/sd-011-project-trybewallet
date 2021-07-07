import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WalletForm from '../components/walletForm';
import { requestCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCoinsList } = this.props;
    requestCoinsList();
  }

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <header>
          <div>
            <div data-testid="email-field">
              {`Email: ${userEmail}`}
            </div>
            <div data-testid="total-field">
              0
            </div>
            <div data-testid="header-currency-field">
              BRL
            </div>
          </div>
        </header>
        <main>
          <WalletForm />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  requestCoinsList: () => dispatch(requestCoins()),
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
  requestCoinsList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
