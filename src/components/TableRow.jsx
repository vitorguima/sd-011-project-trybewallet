import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      tag: '',
      method: '',
      value: '',
      currency: '',
      cambio: '',
      convertedValue: '',
    };
    this.getExpense = this.getExpense.bind(this);
  }

  componentDidMount() {
    this.getExpense();
  }

  getExpense() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    this.setState({
      description,
      tag,
      method,
      value,
      currency: exchangeRates[currency].name.split('/')[0],
      cambio: parseFloat(exchangeRates[currency].ask).toFixed(2),
      convertedValue: parseFloat(value * exchangeRates[currency].ask).toFixed(2),
    });
  }

  render() {
    const {
      description,
      tag,
      method,
      value,
      currency,
      cambio,
      convertedValue,
    } = this.state;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{currency}</td>
        <td>{cambio}</td>
        <td>{convertedValue}</td>
        <td>Real brasileiro</td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({
      name: PropTypes.string,
      ask: PropTypes.number,
    }),
  }).isRequired,
};
