import React from 'react';

export default function ValueInput() {
  return (
    <div className="form-group ">
      <label htmlFor="valueInput">
        Valor
        <input
          required
          id="valueInput"
          name="value"
          type="number"
          step=".01"
          className="form-control"
          placeholder="Adicione o valor"
        />
      </label>
    </div>
  );
}
