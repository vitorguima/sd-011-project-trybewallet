import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeExpense, starEditExpense } from '../actions';

class ExpensesTable extends PureComponent {
  constructor(props) {
    super(props);

    this.renderExpense = this.renderExpense.bind(this);
  }

  renderExpense({ id, description, tag, method, value, currency, exchangeRates }) {
    const { remove, editExpense, edit } = this.props;
    const moeda = exchangeRates[currency];
    const name = moeda.name.replace(/\/.*/gi, '');
    return (
      <tr key={ id }>
        <td><p>{description}</p></td>
        <td><p>{tag}</p></td>
        <td><p>{method}</p></td>
        <td><p>{value}</p></td>
        <td><p>{name}</p></td>
        <td><p>{parseFloat(moeda.ask).toFixed(2)}</p></td>
        <td><p>{(value * moeda.ask).toFixed(2)}</p></td>
        <td><p>Real</p></td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
            disabled={ edit }
            onClick={ () => editExpense(id) }
          >
            Editar
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            disabled={ edit }
            onClick={ () => remove(id) }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
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
        <tbody>
          {
            expenses.map((expense) => (
              this.renderExpense(expense)
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeExpense(id)),
  editExpense: (id) => dispatch(starEditExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
