import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';

class HeaderWallet extends Component {
  render() {
    const { getEmail, getCurrency, getTotalValue = 0 } = this.props;
    return (
      <div className="header-container">
        <h4>
          Logado Como:
          <span
            style={ { color: 'green' } }
          >
            <span className="email" id="email" data-testid="email-field">{getEmail}</span>
          </span>
        </h4>
        <h5>
          Despesas Totais: R$
          <span
            style={ { color: 'red' } }
          >
            <span
              className="total-field"
              id="total-field"
              data-testid="total-field"
            >
              {getTotalValue}
            </span>
          </span>
        </h5>
        <h5>
          <span style={ { color: 'black' } }>
            Moeda:
            <span
              className="currency"
              data-testid="header-currency-field"
            >
              {getCurrency}
            </span>
          </span>
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getCurrency: state.wallet.currency,
  getTotalValue: state.wallet.totalValue,
});

export default connect(mapStateToProps)(HeaderWallet);

HeaderWallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCurrency: PropTypes.string.isRequired,
  getTotalValue: PropTypes.string.isRequired,
};
