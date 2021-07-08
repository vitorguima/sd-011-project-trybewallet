import React from 'react';

export default function () {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de Pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor Convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Tomar café</th>
          <td>Alimentação</td>
          <td>Cartão de Crédito </td>
          <td>25</td>
          <td>Peso Argentino</td>
          <td>0.07</td>
          <td>0.73</td>
          <td>Real Brasileiro</td>
          <td>
            <button className="btn btn-info m-1">Editar</button>
            <button className="btn btn-danger m-1">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
