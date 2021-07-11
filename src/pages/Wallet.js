import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormDispenses from './FormDispenses';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{email}</div>
          <div data-testid="total-field">Despesas Totais: 0</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <FormDispenses />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.obj,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
