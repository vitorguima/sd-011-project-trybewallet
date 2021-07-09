import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.png'
import { newEmail } from '../actions/loginActions'; 

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailDispatch, history } = props;

  function validateEmail(e_mail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(e_mail);
  }

  const isEligible = () => {
    const isPswEligible = password.length >= 6 ? true : false;
    const isEmailEligible = validateEmail(email);
    if (isEmailEligible && isPswEligible) {
      return true;
    }
    return false;
  };

  const submitLogin = (e) => {
    e.preventDefault();
    emailDispatch(email);
    return history.push('/carteira')
  };

    return (
        <div className="login">
          <form className="login__form">

            <div className="login__head">
              <img
                  src={ logo }
                  alt="logo trybe"
                  className="login__img"
              />

              <h1>Wallet</h1>
            </div>

            <input
                type="email"
                id="email"
                placeholder="E-mail"
                data-testid="email-input"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
            />

            <input
                type="password"
                id="password"
                placeholder="password"
                data-testid="password-input"
                onChange={ (e) => setPassword(e.target.value) }
            />

            <button
              type="submit"
              disabled={ !isEligible() }
              className="login__button"
              onClick={ (e) => submitLogin(e) }
            >
              Entrar
            </button>

          </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(newEmail(email))
});

export default connect(null, mapDispatchToProps)(Login);
