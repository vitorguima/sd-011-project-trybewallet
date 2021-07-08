import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor() {
    super();
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger(event) {
    const { onChange } = this.props;
    onChange(event);
  }

  render() {
    const { id, arrayBd, label, valor } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select id={ id } name={ id } value={ valor } onChange={ this.onTrigger }>
          { arrayBd.map((currency, index) => (
            <option
              key={ index }
            >
              { currency }
            </option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  arrayBd: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
