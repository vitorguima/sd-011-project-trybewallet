import React from 'react';

export default function Select() {
  return (
    <div className="form-group">
      <label htmlFor="tagInput">
        Tag
        <select required name="tag" id="tagInput" className="form-select">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </div>
  );
}
