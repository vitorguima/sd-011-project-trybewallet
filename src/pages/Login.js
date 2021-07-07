import React, { useState, useEffect } from 'react';

// regex gerado em https://regex-generator.olafneumann.org/

const regexToEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const regexToPassword = /[\w]{6}/;

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    if (validEmail && validPassword) {
      setIsDisabled(false);
    }
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
    if (email === '' && password === '') {
      return 'precisa ser digitado login e senha';
    }
    return 'implementar rota para /carteira';
  }

  return (
    <>
      <input type="email" data-testid="email-input" onChange={ validInput } />
      <input type="password" data-testid="password-input" onChange={ validInput } />
      <button
        type="button"
        disabled={ isDisabled }
        onClick={ handleLogin }
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
