import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import { getCoins } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApiCoins } = this.props;
    fetchApiCoins();
  }

  render() {
    const { email, loading, coins } = this.props;
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <main>
        <header>
          <h1>TrybeWallet</h1>
          <h4 data-testid="email-field">{`Bem vindo: ${email}`}</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
        <section className="form">
          <Form coins={ coins } />
        </section>
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  loading: state.wallet.isLoading,
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiCoins: () => dispatch(getCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
