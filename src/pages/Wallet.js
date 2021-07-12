import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    const { emailLogin, expenses } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ emailLogin }</p>
          <p data-testid="total-field">
            {Object
              .values(expenses)
              .reduce((acc, expense) => acc + parseFloat(expense.value), 0)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  emailLogin: user.email,
  expenses: wallet.expenses,
});

Wallet.propTypes = {
  emailLogin: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Wallet);
