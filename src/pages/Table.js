import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tr className="tr_table">
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
        <tr className="tr_table">
          {expenses.map((info) => (
            <>
              <td key={ info.id }>{info.id}</td>
              <td key={ info.tag }>{info.tag}</td>
              <td key={ info.method }>{info.method}</td>
              <td key={ info.value }>{info.value}</td>
              <td key={ info.currency }>{info.currency}</td>
            </>
          ))}
        </tr>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
