import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Tabela extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listOfExpenses: [],
  //   };
  // }

  componentDidMount() {
    console.log('tabela');
  }

  render() {
    const { allExpenses } = this.props;
    console.log(allExpenses);
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
          { allExpenses.map((expense,
            index) => <TableRow key={ index } expense={ expense } />)}
        </tbody>
      </table>
    );
  }
}

const MapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});

Tabela.propTypes = {
  allExpenses: PropTypes.arrayOf(),
}.isRequired;

export default connect(MapStateToProps)(Tabela);
