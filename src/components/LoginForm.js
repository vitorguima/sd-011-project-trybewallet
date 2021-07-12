import React from 'react';
import PropTypes from 'prop-types';

function Form({ handleSubmit, handleChange, inputForm }) {
  return (
    <section>
      <form className="login-form" onSubmit={ handleSubmit }>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ handleChange }
          value={ inputForm.email }
          required
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ handleChange }
          value={ inputForm.password }
          required
          pattern=".{6,}"
        />
        <button className="submit-button" disabled type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
}

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputForm: PropTypes.shape({
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
