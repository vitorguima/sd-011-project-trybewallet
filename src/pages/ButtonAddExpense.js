import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddExpense extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>Adicionar despesa</button>
    );
  }
}

ButtonAddExpense.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonAddExpense;
