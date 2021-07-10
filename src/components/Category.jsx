import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div>
        <label htmlFor="Category">
          Tag:
          <select id="Category">
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
}

export default Category;
