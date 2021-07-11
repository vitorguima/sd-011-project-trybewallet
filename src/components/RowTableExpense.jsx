import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RowTableExpense extends Component {
  constructor() {
    super();
    this.state = {
      exchangeUsed: '',
      exchangeValue: 0,
    };
    this.extractExchangeObject = this.extractExchangeObject.bind(this);
    this.exctractExchangeName = this.exctractExchangeName.bind(this);
    this.extractExchangeValue = this.extractExchangeValue.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const exchangeObject = this.extractExchangeObject();
    const exchangeName = this.exctractExchangeName(exchangeObject);
    const exchangeValue = this.extractExchangeValue(exchangeObject);
    this.setState({
      exchangeUsed: exchangeName[0],
      exchangeValue,
    });
  }

  extractExchangeObject() {
    const { expense: { exchangeRates, currency } } = this.props;
    console.log(exchangeRates);
    console.log(currency);
    const exchangeObject = Object.entries(exchangeRates).filter(
      (item) => item[1].code === currency,
    );
    console.log(exchangeObject);
    return exchangeObject;
  }

  exctractExchangeName(exchangeObject) {
    const exchangeName = exchangeObject[0][1].name;
    const exchangeUsed = exchangeName.split('/');
    return exchangeUsed;
  }

  extractExchangeValue(exchangeObject) {
    const exchangeValue = exchangeObject[0][1].ask;
    return parseFloat(exchangeValue);
  }

  render() {
    const { expense: { description, tag, method, value } } = this.props;
    const { exchangeUsed, exchangeValue } = this.state;
    return (
      <tr className="table-row">
        <td id={ description }>{ description }</td>
        <td id={ tag }>{ tag }</td>
        <td id={ method }>{ method }</td>
        <td
          id={ value }
        >
          { value }
        </td>
        <td id={ exchangeUsed }>{ exchangeUsed }</td>
        <td
          id={ parseFloat((exchangeValue * 100) / 100).toFixed(2) }
        >
          { parseFloat((exchangeValue * 100) / 100).toFixed(2) }
        </td>
        <td
          id={ parseFloat((value * exchangeValue * 100) / 100).toFixed(2) }
        >
          { parseFloat((value * exchangeValue * 100) / 100).toFixed(2) }
        </td>
        <td id="Real">Real</td>
        <td id="">excluir</td>
      </tr>
    );
  }
}

RowTableExpense.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])),
  }),
};

RowTableExpense.defaultProps = {
  expense: PropTypes.shape({
    description: '',
    tag: '',
    method: '',
    value: '',
    currency: '',
    exchangeRates: {},
  }),
};
