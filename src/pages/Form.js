import React from 'react';
import PropTypes from 'prop-types';

function Form({ handleSubmit, handleChange, inputForm, isValidated }) {
  return (
    <section>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="email-input"
          name="email"
          onChange={ handleChange }
          value={ inputForm.email }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ handleChange }
          value={ inputForm.password }
        />
        <button disabled={ isValidated } type="submit">
          <span>Entrar</span>
        </button>
      </form>
    </section>
  );
}

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValidated: PropTypes.bool.isRequired,
  inputForm: PropTypes.shape({
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
