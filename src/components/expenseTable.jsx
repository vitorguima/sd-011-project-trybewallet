import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

const ExpenseTable = (props) => {
  const { expenses, removeExpenseValue } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
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
