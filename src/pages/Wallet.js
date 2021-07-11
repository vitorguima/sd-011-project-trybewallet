import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getDataAPI from '../services/fetchAPI';
import { walletAction } from '../actions';
import Header from '../components/Header';
import FormWallet from '../components/FormWallet';

class Wallet extends Component {
  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { dataMoedas } = this.props;
    const apiMoedas = await getDataAPI();
    const data = Object.keys(apiMoedas).filter((moeda) => moeda !== 'USDT');
    dataMoedas(data);
  }

  render() {
    return (
      <div>
        <Header />
        <FormWallet />
      </div>
    );
  }
}
const mapDispathToProps = (dispatch) => ({
  dataMoedas: (arrayMoedas) => dispatch(walletAction(arrayMoedas)),
});

Wallet.propTypes = {
  dataMoedas: PropTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(Wallet);
