import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { setForm } from '../actions';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setForm(inputForm.email));
    setInputForm({ email: '', password: '' });
    console.log(inputForm.email);
    history.push({
      pathname: '/carteira',
    });
  };
  const handleChange = ({ target: { value, name } }) => {
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    const form = document.querySelector('.login-form');
    const buttonSubmit = document.querySelector('.submit-button');
    buttonSubmit.disabled = !form.checkValidity();
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm
        handleChange={ handleChange }
        handleSubmit={ handleSubmit }
        inputForm={ inputForm }
      />
    </div>
  );
}
