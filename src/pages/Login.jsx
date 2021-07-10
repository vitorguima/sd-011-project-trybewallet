import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import  actionFunctions from '../actions'

const Login = () => {
  const [login, setLogin] = useState({email:'',password:''});
  const dispatch = useDispatch();
  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(actionFunctions.saveEmailAction(login.email))
    history.push('/carteira')
  }

  return (
    <form action="">
      <input data-testid="email-input" type="email" onChange={handleInput}/>
      <input data-testid="password-input" type="password" onChange={handleInput}/>
      <button disabled={validateEmailInput()} onClick={handleSubmit}>Entrar</button>
    </form>
  )
}

export default Login;
