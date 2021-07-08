import React, { Component } from 'react';

export default class DescriptionInput extends Component {
  render() {
    return (
      <label htmlFor="description-input">
        Descrição
        <textarea id="description-input" />
      </label>
    );
  }
}
