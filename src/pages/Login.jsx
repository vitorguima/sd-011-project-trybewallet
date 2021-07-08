import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveEmailAction } from '../actions'

const Login = () => {
  const [login, setLogin] = useState({email:'',password:''});
  const dispatch = useDispatch();
  const history = useHistory();
  // const emailUser = useSelector((state) => state.user.email)

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
    dispatch(saveEmailAction(login.email))
    history.push('/carteira')
  }


  return (
    <form action="">
      <input data-testid="email-input" type="email" onChange={handleInput}/>
      <input data-testid="password-input" type="password" onChange={handleInput}/>
      <button disabled={validateEmailInput()} onClick={handleSubmit}>Entrar</button>
      {/* <button>{emailUser}</button> */}
    </form>
  )
}

export default Login;
