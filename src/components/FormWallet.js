import React from 'react';
import { useSelector } from 'react-redux';

function FormWallet() {
  const currencies = useSelector((state) => state.wallet.currencies);
  const arrayOfcur = Object.entries(currencies).map((item) => item[1]);
  const filtredArrayCur = arrayOfcur.filter((item) => item.codein !== 'BRLT');
  console.log(filtredArrayCur);
  return (
    <form>
      <label htmlFor="valor">
        Valor
        <input type="number" id="valor" name="valor" />
      </label>
      <label htmlFor="desc">
        Descrição
        <input type="text" id="desc" name="desc" />
      </label>
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
        >
          {filtredArrayCur.map((item, idx) => (
            <option value={ item.code } key={ idx }>{ item.code }</option>
          ))}
        </select>
      </label>
      <label htmlFor="payment">
        Método de pagamento
        <select id="payment" name="payment">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>

    </form>
  );
}

export default FormWallet;
