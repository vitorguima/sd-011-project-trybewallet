import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      gastos: 0,
      cambio: 'BRL',
    };
  }

  render() {
    const { userEmail } = this.props;
    const { gastos, cambio } = this.state;
    return (
      <div className="wallet-container">
        <section>
          <img
            className="trybe-img"
            src="/public/v7oifu5eirdxepzyg0p0.png"
            alt="símbolo Trybe"
          />
        </section>
        <section>
          <span data-testid="email-field">{userEmail}</span>
          <span data-testid="total-field">{gastos}</span>
          <span data-testid="header-currency-field">{cambio}</span>
        </section>
      </div>);
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
