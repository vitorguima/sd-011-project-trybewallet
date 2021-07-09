import React from 'react';
import withStore from '../../utils/withStore';



class ExpensesTable extends React.Component {
  render() {
    const { wallet } = this.props;

    return(
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
          { wallet.expenses.map(({ currency, description, exchangeRates, id, method, tag, value }) => {
            const usedExchange = parseFloat(exchangeRates[currency].ask);
            const convertedValue = usedExchange * parseFloat(value);
            const [convertedFrom, convertedTo] = exchangeRates[currency].name.split('/');

            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ convertedFrom }</td>
                <td>{ usedExchange.toFixed(2) }</td>
                <td>{ convertedValue.toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button type="button">
                    Editar
                  </button>
                  <button type="button">
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

export default withStore(ExpensesTable, ['wallet']);
