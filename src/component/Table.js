import React from 'react';

const Table = () => {
  const [table] = React.useState(['Descrição',
    'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
    'Valor convertido', 'Moeda de conversão', 'Editar/Excluir']);

  return (
    <table>
      <thead>
        <tr>
          {table.map((elem, key) => <th key={ key }>{ elem }</th>)}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
