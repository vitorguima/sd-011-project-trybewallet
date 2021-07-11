import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenseWallet } from '../actions';

class RowTableExpense extends Component {
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
    this.deleteExpense = this.deleteExpense.bind(this);
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

  deleteExpense(id) {
    const { expenses, deleteExpense } = this.props;
    const deletedExpenseNewArray = expenses.filter((expense) => expense.id !== id);
    deleteExpense(deletedExpenseNewArray);
    // console.log(deletedExpenseNewArray);
  }

  render() {
    const { expense: { description, tag, method, value, id } } = this.props;
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
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.deleteExpense(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

RowTableExpense.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])),
  }),
  expenses: PropTypes.shape({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string])),
    filter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  }),
  deleteExpense: PropTypes.func.isRequired,
};

RowTableExpense.defaultProps = {
  expense: PropTypes.shape({
    id: '',
    description: '',
    tag: '',
    method: '',
    value: '',
    currency: '',
    exchangeRates: {},
  }),
  expenses: PropTypes.shape({
    description: '',
    tag: '',
    method: '',
    value: '',
    currency: '',
    exchangeRates: {},
  }),
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (updatedExpenses) => dispatch(deleteExpenseWallet(updatedExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RowTableExpense);
