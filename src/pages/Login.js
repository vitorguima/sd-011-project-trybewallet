import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmailStore } from '../actions';
import './login.css';

// regex gerado em https://regex-generator.olafneumann.org/

const regexToEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const regexToPassword = /[\w]{6}/;

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const addEmailtoStore = () => dispatch(setEmailStore(email, password));
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
    addEmailtoStore();
    history.push('/carteira');
  }
  return (
    <div className="page-login">
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

export default Login;

// const mapDispatchToProps = (dispatch) => ({
// handleLogOn: (email) => dispatch(setEmailStore(email)),
// });

// Login.propTypes = {
//  handleLogOn: PropTypes.func.isRequired,
// };

// export default connect(null, mapDispatchToProps)(Login);
