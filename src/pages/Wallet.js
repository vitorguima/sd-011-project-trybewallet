import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { fetchApi } from '../actions';
import ExpensesForm from '../components/ExpensesForm';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { value } = this.state;
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ value }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" />
          </label>
          <ExpensesForm />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

// const mapDispatchToProps = (dispatch) => ({
//   requestApi: () => dispatch(fetchApi()),
// });

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
