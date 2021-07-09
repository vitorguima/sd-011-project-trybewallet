import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      expenses.map((expense, index) => (
        <tr key={ index }>
          <td>{expense.description}</td>
          <td>{expense.tag}</td>
          <td>{expense.method}</td>
          <td>{expense.value}</td>
          <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
          <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
          <td>
            {(expense.value * expense.exchangeRates[expense.currency].ask)
              .toFixed(2)}
          </td>
          <td>Real</td>
          <td>
            {' '}
            <span>Editar</span>
            {' '}
            /
            {' '}
            <span>Excluir</span>
          </td>
        </tr>
      ))
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps)(Expenses);

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any),
};

Expenses.defaultProps = {
  expenses: [],
};
