import React from 'react';
import { useState } from 'react';

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    const { target } = e;
    e.preventDefault();
    const data = new FormData(target);
    const userInformation = { email: data.get('email'), password: data.get('password') };
    setLogin(userInformation);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleDisabled = () => {
    const validRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
    );
    if (validRegex.test(login.email) && login.password.length >= 6) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form className="w-25 login-form " onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email address
          <input
            onChange={(e) => handleChange(e)}
            name="email"
            data-testid="email-input"
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
          <input
            onChange={(e) => handleChange(e)}
            name="password"
            data-testid="password-input"
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </label>
      </div>
      <button disabled={handleDisabled()} type="submit" className="btn btn-primary">
        Entrar
      </button>
    </form>
  );
}
