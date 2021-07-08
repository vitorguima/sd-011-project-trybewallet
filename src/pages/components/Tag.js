import React from 'react';

class Tag extends React.Component {
  render() {
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="Tag">
        Tag
        <select
          name="Tag"
          id="Tag"
        >
          <option>Selecionea tag</option>
          { tags.map((tag, index) => (
            <option key={ index }>{ tag }</option>)) }
        </select>
      </label>
    );
  }
}

export default Tag;
