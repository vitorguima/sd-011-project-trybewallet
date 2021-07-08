import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTable, editing } from '../actions';

class TableRowExpenses extends Component {
  render() {
    const { expenses, dispatchDelete, dispatchEditing } = this.props;
    return (
      <tr>
        <td>{expenses.description}</td>
        <td>{expenses.tag}</td>
        <td>{expenses.method}</td>
        <td>{expenses.value}</td>
        <td>{expenses.exchangeRates[expenses.currency].name}</td>
        <td>{Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2)}</td>
        <td>
          {
            (Number(expenses.exchangeRates[expenses.currency].ask)
              * Number(expenses.value)).toFixed(2)
          }

        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => dispatchDelete(expenses) }
          >
            Excluir
          </button>
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ () => {
              dispatchEditing(expenses);
            } }
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (state) => dispatch(deleteTable(state)),
  dispatchEditing: (state) => dispatch(editing(state)),
});

TableRowExpenses.propTypes = {
  dispatchDelete: PropTypes.func.isRequired,
  dispatchEditing: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    exchangeRates: PropTypes.oneOfType([PropTypes.object]),
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(TableRowExpenses);
