import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import { fetchCurencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestCurencies } = this.props;
    requestCurencies();
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <ExpensesForm />
        <ExpensesTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  requestCurencies: () => dispatch(fetchCurencies()),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
