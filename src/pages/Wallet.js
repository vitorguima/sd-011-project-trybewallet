import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';
import LabelForm from '../components/LabelForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
    };
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  render() {
    const { email, coins } = this.props;
    const { valor } = this.state;
    return (
      <>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">
            {' '}
            { valor }
            {' '}
          </div>
          <div data-testid="header-currency-field"> BRL </div>

        </header>
        <LabelForm coins={ coins } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
