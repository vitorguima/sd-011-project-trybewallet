import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [login, setLogin] = useState({email:'',password:''});

  function handleInput(e) {
    const { target } = e;
    const { value, type } = target;
    setLogin({...login, [type]: value});
  }

  const validateEmailInput = () => {
    const loginValue = login.email;
    const passwordValue = login.password
    if (loginValue.includes('@')
        && loginValue.includes('.com')
        && passwordValue.length >= 6
        ) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <form action="">
      <input data-testid="email-input" type="email" onChange={handleInput}/>
      <input data-testid="password-input" type="password" onChange={handleInput}/>
      <button disabled={validateEmailInput()}>Entrar</button>
    </form>
  )
}

export default Login;
