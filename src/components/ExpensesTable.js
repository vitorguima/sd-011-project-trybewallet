import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderTable from './Header Table';

class ExpensesTable extends Component {
  render() {
    const { expenses, handleDelet } = this.props;
    return (
      <table>
        <HeaderTable />
        { expenses.map((celula, index) => (
          <tr key={ index } id={ celula.id }>
            <td>
              { celula.description }
            </td>
            <td>
              { celula.tag }
            </td>
            <td>
              { celula.method }
            </td>
            <td>
              { celula.value }
            </td>
            <td>
              { celula.exchangeRates[celula.currency].name }
            </td>
            <td>
              { parseFloat(celula.exchangeRates[celula.currency].ask).toFixed(2) }
            </td>
            <td>
              { parseFloat((celula.exchangeRates[celula.currency].ask * celula.value)
                .toFixed(2)) }
            </td>
            <td>
              Real
            </td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => handleDelet(celula.id) }
              >
                Delete
              </button>
            </td>
          </tr>))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
  handleDelet: PropTypes.func.isRequired,
};
