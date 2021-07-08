import React from 'react';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses.reduce(
        ((accumulator, currentValue) => {
          const valueInNumber = parseFloat(currentValue.value);
          const rateOfCurrency = currentValue.exchangeRates[currentValue.currency];
          const rateInNumber = parseFloat(rateOfCurrency.ask);
          return accumulator + parseFloat(valueInNumber * rateInNumber);
        }), 0,
      );
    }
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeaderWallet;
