import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, options, onChange } = this.props;
    let text = '';
    if (id === 'method') text = 'Método de pagamento';
    if (id === 'tag') text = 'Tag';
    if (id === 'currency') text = 'Moeda';
    return (
      <label className="title is-6" htmlFor={ id }>
        { text }
        <select
          className="select is-rounded"
          name={ id }
          id={ id }
          onChange={ onChange }
          data-testid={ `${id}-input` }
        >
          { options.map(({ code }, index) => (
            <option key={ index } value={ code }>{ code }</option>
          )) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
