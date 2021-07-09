import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class Table extends Component {
  renderThead() {
    return (
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
      </thead>);
  }

  render() {
    const { expenses, removeExpenseAct, functionForm } = this.props;
    return (
      <div>
        <table>
          {this.renderThead()}
          <tbody>
            {expenses.map((v, i) => (
              <tr key={ i }>
                <td>{v.description}</td>
                <td>{v.tag}</td>
                <td>{v.method}</td>
                <td>{v.value}</td>
                <td>{v.exchangeRates[v.currency].name}</td>
                <td>{Number(v.exchangeRates[v.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(v.exchangeRates[v.currency].ask) * Number(v.value)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => functionForm(v.id) }
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeExpenseAct(i) }
                  >
                    Delete
                  </button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  functionForm: PropTypes.func.isRequired,
  removeExpenseAct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  functionForm: state.wallet.formFuction,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseAct: (index) => dispatch(removeExpense(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
