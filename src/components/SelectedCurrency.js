import React, { Component } from 'react';

class SelectedCurrency extends Component {
  render() {
    return (
      <label htmlFor="options">
        Moeda:
        <select id="options">
          {/* <option value="laranja">Laranja</option>
          <option value="limao">Limão</option>
          <option value="coco">Coco</option>
          <option value="manga">Manga</option> */}
        </select>
      </label>
    );
  }
}

export default SelectedCurrency;
