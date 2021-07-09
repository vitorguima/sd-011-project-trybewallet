import React from 'react';

class Select extends React.Component {
  render() {
    const { handleChange, value, options, name, id, label } = this.props;

    return (
      <label
        htmlFor={ id }
      >
        { label }
        <select
          name={ name }
          onChange={ handleChange }
          value={ value }
          id={ id }
        >
          { options.map((option) => (
            <option
              key={ `${name}-${option}` }
            >
              { option }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

export default Select;
