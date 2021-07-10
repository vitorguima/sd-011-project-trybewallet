import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import Fomrs from '../components/Fomrs';
import { getCurrencyThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { activeApi } = this.props;
    activeApi();
  }

  render() {
    return (
      <>
        <HeaderWallet />
        <div className="wallet-container">
          <h1>Trybe-Wallet</h1>
          <div className="forms-container">
            <Fomrs />
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  activeApi: () => dispatch(getCurrencyThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  activeApi: PropTypes.func.isRequired,
};
