import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';
import expenseTableHead from '../data/expenseTableHead';

const ExpenseTable = (props) => {
  const { expenses, removeExpenseValue } = props;

  return (
    <table>
      <thead>
        <tr>
          { expenseTableHead.map((curr) => (
            <th key={ curr }>{ curr }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { expenses.map((curr) => {
          const { id, description, tag, method, value, currency, exchangeRates } = curr;
          const roundedValue = (valueInput) => Math.round(valueInput * 100) / 100;
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ roundedValue(exchangeRates[currency].ask) }</td>
              <td>{ roundedValue(exchangeRates[currency].ask * value) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ () => removeExpenseValue(id) }
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => removeExpenseValue(id) }
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseValue: (id) => dispatch(removeExpense(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpenseValue: PropTypes.func.isRequired,
};

ExpenseTable.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
