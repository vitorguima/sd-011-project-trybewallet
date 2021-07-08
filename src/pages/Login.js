import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { setForm } from '../actions';
import Form from './Form';

function Login({ user }) {
  // const dispatch = useDispatch();
  const history = useHistory();
  // const [isValidated, setIsValidated] = useState(true);
  const [inputForm, setInputForm] = useState({
    email: '',
    password: '',
  });
  // const VALID_PASS = 6;
  // const VALID_EMAIL = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(setForm(inputForm.email));
    user(inputForm.email);
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
    const form = document.querySelector('.login-form');
    const buttonSubmit = document.querySelector('.submit-button');
    buttonSubmit.disabled = !form.checkValidity();
  };
  return (
    <Form
      handleChange={ handleChange }
      handleSubmit={ handleSubmit }
      // isValidated={ isValidated }
      inputForm={ inputForm }
    />
  );
}
const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(setForm(payload)),
});

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
