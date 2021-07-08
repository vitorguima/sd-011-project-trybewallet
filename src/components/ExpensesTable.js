import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends PureComponent {
  constructor() {
    super();

    this.renderExpense = this.renderExpense.bind(this);
  }

  renderExpense(expense) {
    const { id, description, tag, method, value, currency, exchangeRates } = expense;
    const moeda = exchangeRates[currency];
    return (
      <tr key={ id }>
        <td><p>{description}</p></td>
        <td><p>{tag}</p></td>
        <td><p>{method}</p></td>
        <td><p>{value}</p></td>
        <td><p>{moeda.name}</p></td>
        <td><p>{parseFloat(moeda.ask).toFixed(2)}</p></td>
        <td><p>{(value * moeda.ask).toFixed(2)}</p></td>
        <td><p>Real</p></td>
        <td><button type="button">Deletar</button></td>
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
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchMoedas: () => dispatch(fetchCurrencies()),
// });

export default connect(mapStateToProps, null)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
