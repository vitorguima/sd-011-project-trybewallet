import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesForm from '../component/ExpensesForm';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    return fetchCurrencies();
  }

  render() {
    const { email, totalField } = this.props;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field">{ totalField }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <section>
          <ExpensesForm />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalField: state.wallet.totalField,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalField: PropTypes.number.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
