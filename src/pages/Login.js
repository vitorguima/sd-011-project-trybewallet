import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setEmailStore } from '../actions';
import './login.css';

// regex gerado em https://regex-generator.olafneumann.org/

const regexToEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const regexToPassword = /[\w]{6}/;

function Login({ handleLogOn }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (validEmail && validPassword) return setIsDisabled(false);
  });
  function validInput({ target: { type, value } }) {
    if (type === 'email') {
      const validated = regexToEmail.test(value);
      setValidEmail(validated);
      setEmail(value);
    }
    if (type === 'password') {
      const validated = regexToPassword.test(value);
      setValidPassword(validated);
      setPassword(value);
    }
  }
  function handleLogin() {
    if (email === '' && password === '') return Error('campo vazio');
    handleLogOn(email);
    history.push('/carteira');
  }
  return (
    <div id="page-login">
      <div className="main-content">
        <input
          type="email"
          data-testid="email-input"
          onChange={ validInput }
          placeholder="email"
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ validInput }
          placeholder="senha"
        />
        <button type="button" disabled={ isDisabled } onClick={ handleLogin }>
          Entrar
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleLogOn: (email) => dispatch(setEmailStore(email)),
});

Login.propTypes = {
  handleLogOn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
