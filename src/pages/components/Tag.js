import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { inputValue } = this.props;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="Tag">
        Tag
        <select
          name="tag"
          id="Tag"
          onChange={ inputValue }
        >
          { tags.map((tag, index) => (
            <option key={ index }>{ tag }</option>)) }
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  inputValue: PropTypes.string,
}.isRequired;

export default Tag;
