import React from 'react';
import { GlobalContext } from '../GlobalContext';

function SelectTag() {
  const { providerValues } = React.useContext(GlobalContext);

  function handleChangeTag({ target }) {
    providerValues.setTag(target.value);
  }

  return (
    <div>
      <label htmlFor="category">
        Tag:
        <select name="category" id="category" onChange={ handleChangeTag }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    </div>
  );
}

export default SelectTag;
