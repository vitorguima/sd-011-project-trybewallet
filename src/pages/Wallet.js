import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <p data-testid="total-field">{`Gastos: ${0}`}</p>
        <p data-testid="header-currency-field">Moeda: BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
