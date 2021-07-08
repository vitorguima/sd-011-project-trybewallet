import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  constructor() {
    super();
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger(event) {
    const { onChange } = this.props;
    onChange(event);
  }

  render() {
    const { id, valor, label } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          id={ id }
          onChange={ this.onTrigger }
          value={ valor }
          name={ id }
          type="text"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputText;
