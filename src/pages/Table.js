import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  constructor() {
    super();

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(value) {
    const { removeFuncDescription, addEditFunction } = this.props;
    return (
      <>
        <button
          data-testid="delete-btn"
          type="button"
          onClick={ () => removeFuncDescription(value.id) }
        >
          Excluir
        </button>
        <button
          data-testid="edit-btn"
          type="button"
          onClick={ () => addEditFunction(value) }
        >
          Editar
        </button>
      </>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div>
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
            {expenses.map((value, index) => (
              <tr key={ index }>
                <td>{value.description}</td>
                <td>{value.tag}</td>
                <td>{value.method}</td>
                <td>{value.value}</td>
                <td>{value.exchangeRates[value.currency].name}</td>
                <td>{(Number(value.exchangeRates[value.currency].ask).toFixed(2))}</td>
                <td>
                  {(Number((value.exchangeRates[value.currency].ask)
                  * value.value).toFixed(2))}
                </td>
                <td>Real</td>
                <td>
                  {this.renderButton(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addEditFunction: state.wallet.keepFuncEdit,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
