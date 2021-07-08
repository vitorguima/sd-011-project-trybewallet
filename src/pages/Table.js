import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../components/TableHeader';

const Theader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {Theader.map((header) => <th key={ header }>{header}</th>)}
        <TableHeader expenses={ expenses } tag="description" />
        <TableHeader expenses={ expenses } tag="tag" />
        <TableHeader expenses={ expenses } tag="method" />
        <TableHeader expenses={ expenses } tag="value" />
        <TableHeader expenses={ expenses } tag="currency" />
        <TableHeader expenses={ expenses } tag="exchange" />
        <TableHeader expenses={ expenses } tag="convertedValue" />
        <TableHeader expenses={ expenses } tag="conversionCurrency" />
        <TableHeader expenses={ expenses } tag="button" />
      </tbody>
    );
  }
}

export default Table;

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
