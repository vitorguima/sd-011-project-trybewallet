import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { getCoin } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de Pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio Utilizado</th>
              <th>Valor Convertido</th>
              <th>Moeda de Conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {getCoin.map((product) => (
              <tr key={ product.id }>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getCoin: state.wallet.currencies,
});

Table.propTypes = ({
  getCoin: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

export default connect(mapStateToProps, null)(Table);
