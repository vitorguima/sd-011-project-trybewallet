import React from 'react';

class Descrição extends React.Component {
  render() {
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          type="text"
          name="Descrição"
          id="Descrição"
        />
      </label>
    );
  }
}

export default Descrição;
