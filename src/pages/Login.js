import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setForm } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const [isValidated, setIsValidated] = useState(true);
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });
  const VALID_PASS = 5;
  const VALID_EMAIL = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setForm(inputForm));
    setInputForm({ email: '', password: '' });
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (inputForm.email && VALID_EMAIL.test(inputForm.email)
    && inputForm.password.length >= VALID_PASS) {
      setIsValidated(false);
    }
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };
  return (
    <section>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="email-input"
          type="email"
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

export default Login;
