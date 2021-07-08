import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setForm } from '../actions';
import Form from './Form';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isValidated, setIsValidated] = useState(true);
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });
  const VALID_PASS = 6;
  const VALID_EMAIL = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setForm(inputForm.email));
    setInputForm({ email: '', password: '' });
    history.push({
      pathname: '/carteira',
    });
  };
  const handleChange = ({ target: { value, name } }) => {
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    setIsValidated(true);
    if (VALID_EMAIL.test(inputForm.email)
    && inputForm.password.length + 1 >= VALID_PASS) {
      setIsValidated(false);
    }
  };
  return (
    <Form
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      isValidated={ isValidated }
      inputForm={ inputForm }
    />
  );
}

export default Login;
