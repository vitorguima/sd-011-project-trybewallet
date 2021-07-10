import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expenseRemoveAction } from '../actions';
import Theader from '../table-components/Theader';

class Table extends Component {
  render() {
    const { expenses, removeExpense } = this.props;
    return (
      <div>
        <table>
          <Theader />
          { expenses.map((exp, index) => {
            const { description, tag, method, value, exchangeRates, currency } = exp;
            const valueFloat = Number.parseFloat(value);
            const currencyName = (exchangeRates[currency].name)
              .replace('/Real Brasileiro', '');
            const ask = (Number.parseFloat(exchangeRates[currency].ask));
            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {valueFloat}
                </td>
                <td>{currencyName}</td>
                <td>{ask.toFixed(2)}</td>
                <td>{(ask * valueFloat).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button type="button">
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeExpense(exp) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }) }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (state) => dispatch(expenseRemoveAction(state)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
