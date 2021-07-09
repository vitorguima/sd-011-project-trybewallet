import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import { fetchCurrencyQuotes } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getfetch } = this.props;
    getfetch();
  }

  render() {
    const { email, expenses, currencies } = this.props;
    return (
      <div>
        <Header email={ email } expenses={ expenses } />
        <ExpenseForm expenses={ expenses } currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { currencies, expenses } }) => (
  { email, currencies, expenses }
);
const mapDispatchToProps = (dispatch) => ({
  getfetch: () => dispatch(fetchCurrencyQuotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getfetch: PropTypes.func.isRequired,
};
