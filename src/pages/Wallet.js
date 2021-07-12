import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../component/Header';
import WalletComponent from '../component/WalletComponent';
// import saveCoins from '../actions';

export default class Wallet extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     allAcronymCurrency: [],
  //   };

  // this.acronymCurrency = this.acronymCurrency.bind(this);
  // }

  // componentDidMount() {
  //   this.acronymCurrency();
  // }

  // acronymCurrency(data) {
  //   const setCoins = Object.keys(data);
  //   const allAcronymCurrency = setCoins.filter((item) => item !== 'USDT');
  //   this.setState({
  //     allAcronymCurrency,
  //   });
  // }

  // acronymCurrency() {
  //   const { getCoins } = this.props;
  //   const allAcronymCurrency = getCoins.filter((item) => item !== 'USDT');
  //   this.setState({
  //     allAcronymCurrency,
  //   });
  // }

  // async fetchCoin() {
  //   try {
  //     const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  //     const resultCoin = await request.json();
  //     this.acronymCurrency(resultCoin);
  //   } catch (error) {
  //     console.log('Requisição errada', error);
  //   }
  // }

  render() {
    return (
      <div>
        <Header />
        <WalletComponent />
        {/* <WalletComponent allAcronymCurrency={ allAcronymCurrency } /> */}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   getCoins: () => { dispatch(saveCoins()); },
// });

// const mapStateToProps = (state) => ({
//   stateCoins: state.wallet.allCoins,
// });

// export default connect(null, mapDispatchToProps)(Wallet) ;

// Wallet.propTypes = {
//   getCoins: PropTypes.func,
// }.isRequired;
