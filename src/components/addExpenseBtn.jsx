import React from 'react';
import PropTypes from 'prop-types';

const AddExpenseBtn = (props) => {
  const { requestExpenseData } = props;
  return (
    <button
      type="button"
      onClick={ () => requestExpenseData() }
    >
      Adicionar despesa
    </button>
  );
};

AddExpenseBtn.propTypes = {
  requestExpenseData: PropTypes.func.isRequired,
};

export default AddExpenseBtn;
