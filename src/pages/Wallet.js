import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Headers from './Headers';
import fetchAPI from '../services/fetchAPI';
import { walletAction } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    this.currency();
  }

  async currency() {
    const data = await fetchAPI();
    const { coin } = this.props;
    const result = Object.keys(data).filter((coins) => coins !== 'USDT');
    coin(result);
  }

  render() {
    return (
      <div>
        <Headers />
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  coin: (payload) => dispatch(walletAction(payload)),
});

Wallet.propTypes = ({
  coin: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
