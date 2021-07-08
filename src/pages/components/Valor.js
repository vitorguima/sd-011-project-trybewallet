import React from 'react';

class Valor extends React.Component {
  render() {
    return (
      <label htmlFor="Valor">
        Valor
        <input
          type="number"
          name="Valor"
          id="Valor"
        />
      </label>
    );
  }
}

export default Valor;
