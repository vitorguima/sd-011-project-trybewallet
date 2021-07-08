import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../actions/index';

class Table extends Component {
  render() {
    const { extenses, removeItem } = this.props;
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
          {extenses.map(({
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          }, index) => (
            <tr key={ index }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
              <button type="button">Editar</button>
              <button
                onClick={ () => removeItem(id) }
                data-testid="delete-btn"
                type="button"
              >
                Excluir
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  extenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  extenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
