import React, { Component } from 'react';

class HeaderList extends Component {
  render() {
    return (
      <div className="table">
        <div className="line">
          <div className="column"> Descrição</div>
          <div className="column"> Tag</div>
          <div className="column"> Método de Pagamento</div>
          <div className="column">Valor</div>
          <div className="column"> Moeda</div>
          <div className="column"> Câmbio utilizado</div>
          <div className="column"> Valor convertido</div>
          <div className="column"> Moeda de conversão</div>
          <div className="column"> Editar/Excluir</div>
        </div>
      </div>
    );
  }
}

export default HeaderList;
