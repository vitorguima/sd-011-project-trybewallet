import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <div>
        <header className="tableHeader">
          <div className="itemTable">
            <p>Descrição</p>
          </div>
          <div className="itemTable">
            <p>Tag</p>
          </div>
          <h4 className="itemTable">Método de pagamento</h4>
          <h4 className="itemTable">Valor</h4>
          <h4 className="itemTable">Moeda</h4>
          <h4 className="itemTable">Câmbio utilizado</h4>
          <h4 className="itemTable">Valor convertido</h4>
          <h4 className="itemTable">Moeda de conversão</h4>
          <h4 className="itemTable">Editar/Excluir</h4>
          {/* <table>
            <thead>
              <tr>
                <th></th>
                <td></td>
              </tr>
            </thead>

            <tbody>

            </tbody>
          </table> */}
        </header>
      </div>
    );
  }
}

export default Table;
