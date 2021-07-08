import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.removeGasto = this.removeGasto.bind(this);
  }

  removeGasto() {
    const { removeExpense, expense: { id } } = this.props;
    // const { id } = this.state;
    console.log(id);
    removeExpense(id);
  }

  render() {
    const { expense: {
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    } } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{parseFloat(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <button
          type="button"
          onClick={ this.removeGasto }
          data-testid="delete-btn"
        >
          X
        </button>
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
    id: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({
      name: PropTypes.string,
      ask: PropTypes.number,
    }),
  }).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const MapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(null, MapDispatchToProps)(TableRow);
