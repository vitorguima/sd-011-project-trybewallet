import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialExpenses: 0,
      initialCurrencies: 'BRL',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { email } = this.props;
    const { initialCurrencies, initialExpenses } = this.state;
    return (
      <div>
        <header>
          <h3 data-testid="email-field">{ `Usuario: ${email}` }</h3>
          <div data-testid="total-field">{initialExpenses}</div>
          <div data-testid="header-currency-field">{initialCurrencies}</div>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.defaultProps = {
  email: '',
  // expenses: 0,
};

Wallet.propTypes = {
  email: PropTypes.string,
  getCurrencies: PropTypes.func.isRequired,
};
