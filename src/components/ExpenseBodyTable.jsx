import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseBodyTable extends Component {
  getCurrencyQuotation(selectedCurrency) {
    const { info: { exchangeRates } } = this.props;
    const value = exchangeRates[selectedCurrency].ask;
    return value;
  }

  getCurrencyName(obj, value) {
    return obj[value].name.split('/')[0];
  }

  calculateConversion(quotation, expenseValue) {
    const convertedValue = Math.round(expenseValue * quotation * 100) / 100;
    return convertedValue;
  }

  render() {
    const { info: {
      value,
      description,
      currency,
      tag,
      method,
      exchangeRates,
    } } = this.props;
    const askPrice = (this.getCurrencyQuotation(currency));
    const convertedTotal = this.calculateConversion(askPrice, value);
    const usedCurrency = this.getCurrencyName(exchangeRates, currency);
    return (
      <>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{usedCurrency}</td>
        <td>{Math.round(askPrice * 100) / 100}</td>
        <td>{convertedTotal}</td>
        <td>Real</td>
        <td />
      </>
    );
  }
}

ExpenseBodyTable.propTypes = ({
  info: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    exchangeRates: PropTypes.shape(),
  }),
});

ExpenseBodyTable.defaultProps = ({
  info: {},
});

export default ExpenseBodyTable;
