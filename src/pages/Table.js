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

const tags = [
  'description',
  'tag',
  'method',
  'value',
  'currency',
  'exchange',
  'convertedValue',
  'conversionCurrency',
  'button',
];

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <tbody>
        {Theader.map((header) => <th key={ header }>{header}</th>)}
        {tags.map((tag) => <TableHeader key={ tag } expenses={ expenses } tag={ tag } />)}
      </tbody>
    );
  }
}

export default Table;

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
