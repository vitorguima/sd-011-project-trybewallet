import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../actions';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';

class ExpenseTable extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(actualExpense) {
    const { expenses, deleteButton } = this.props;
    const newExpenses = expenses.filter((expense) => (
      expense !== actualExpense
    ));
    deleteButton(newExpenses);
  }

  render() {
    const { expenses } = this.props;
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
        { expenses.length > 0
          ? expenses.map((expense, index) => {
            const { value, description, method, tag, exchangeRates, currency } = expense;
            const curr = Object.entries(exchangeRates).find((cur) => cur[0] === currency);
            const { name, ask } = curr[1];
            return (
              <tbody key={ `expense ${index}` }>
                <tr>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ name }</td>
                  <td>{ Number(ask).toFixed(2) }</td>
                  <td>{ (value * Number(ask)).toFixed(2) }</td>
                  <td>Real</td>
                  <td>
                    <EditBtn handleDelete={ this.handleDelete } expense={ expense } />
                    <DeleteBtn handleDelete={ this.handleDelete } expense={ expense } />
                  </td>
                </tr>
              </tbody>
            );
          })
          : null }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteButton: (expenses) => dispatch(userActions.deleteExpense(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);

ExpenseTable.propTypes = {
  expense: PropTypes.array,
}.isRequired;
