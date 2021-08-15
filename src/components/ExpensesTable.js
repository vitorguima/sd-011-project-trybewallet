import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteExpenses, editExpense } from '../actions/index';

class ExpensesTable extends Component {
  handleDelete(uniqueId) {
    const { expenses, deleteDispatch } = this.props;
    const copyOfExpenses = [...expenses];
    const filteredExpenses = copyOfExpenses
      .filter(({ id }) => id !== parseInt(uniqueId, 10));

    deleteDispatch(filteredExpenses);
  }

  deleteButton(id) {
    return (
      <button
        type="button"
        id={ id }
        data-testid="delete-btn"
        onClick={ ({ target }) => this.handleDelete(target.id) }
      >
        Excluir
      </button>
    );
  }

  editButton(id) {
    const { editDispatch } = this.props;
    return (
      <button
        type="button"
        id={ id }
        data-testid="edit-btn"
        onClick={ ({ target }) => editDispatch(target.id) }
      >
        Editar
      </button>
    );
  }

  renderTableLines(expenses) {
    return (
      expenses.map(({
        id,
        value,
        description,
        currency,
        method,
        tag,
        exchangeRates,
      }, index) => (
        <tr
          key={ index }
        >
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{(Math.round(exchangeRates[currency].ask * 100) / 100).toFixed(2)}</td>
          <td>{(Number(value) * Number(exchangeRates[currency].ask))}</td>
          <td>Real</td>
          <td>
            {this.deleteButton(id)}
            {this.editButton(id)}
          </td>
        </tr>
      )));
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table className="clients-table">
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
            { expenses.length ? this.renderTableLines(expenses) : null }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (expenses) => dispatch(deleteExpenses(expenses)),
  editDispatch: (id) => dispatch(editExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
      currency: PropTypes.string,
      method: PropTypes.string,
      tag: PropTypes.string,
      exchangeRates: PropTypes.shape({
        ask: PropTypes.string,
        bid: PropTypes.string,
        code: PropTypes.string,
        codein: PropTypes.string,
        create_date: PropTypes.string,
        high: PropTypes.string,
        low: PropTypes.string,
        name: PropTypes.string,
        pctChange: PropTypes.string,
        timestamp: PropTypes.string,
        varBid: PropTypes.string,
      }).isRequired,
    }),
  ),
  deleteDispatch: PropTypes.func,
  editDispatch: PropTypes.func,
}.isRequired;
