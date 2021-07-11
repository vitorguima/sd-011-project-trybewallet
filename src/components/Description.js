import React from 'react';

export default function Description() {
  return (
    <div className="form-group ">
      <label htmlFor="descriptionInput">
        Descrição
        <input
          required
          name="description"
          type="text"
          className="form-control"
          id="descriptionInput"
          placeholder="Adicione a descrição"
        />
      </label>
    </div>
  );
}
