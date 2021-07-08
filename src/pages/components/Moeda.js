import React from 'react';

class Moeda extends React.Component {
  render() {
    return (
      <label htmlFor="Moeda">
        Moeda
        <select
          name="Moeda"
          id="Moeda"
        >
          <option value="">Vazio</option>
        </select>
      </label>
    );
  }
}

export default Moeda;
