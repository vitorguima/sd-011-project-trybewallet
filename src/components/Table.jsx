import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';
import TableHead from './TableHead';

class Table extends Component {
  render() {
    const { expenses, deleteAction } = this.props;
    console.log(expenses);
    return (
      <table>
        <TableHead />
        <tbody>
          {expenses.map((item, index) => (
            <tr key={ index }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{item.value}</td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td>{(Number(item.exchangeRates[item.currency].ask)).toFixed(2)}</td>
              <td>
                {
                  (Number(item.exchangeRates[item.currency].ask)
                  * Number(item.value)).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => deleteAction(index) }
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  deleteAction: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAction: (index) => dispatch(deleteExpense(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
