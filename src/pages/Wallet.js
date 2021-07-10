import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <>
        <div>Logo</div>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">Despesa total: R$ 0,00 </div>
        <span data-testid="header-currency-field"> BRL</span>
        <ExpensesForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
