import React from 'react';
import { GlobalContext } from '../GlobalContext';

function SelectMethod() {
  const { providerValues } = React.useContext(GlobalContext);

  function handleChangeMethod({ target }) {
    providerValues.setMethod(target.value);
  }

  return (
    <div>
      <label htmlFor="payment">
        Método de pagamento:
        <select name="payment" id="payment" onChange={ handleChangeMethod }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    </div>
  );
}

export default SelectMethod;
