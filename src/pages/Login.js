import React from 'react';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefaul();
    console.log(email);
    console.log(password);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        style={ { display: 'block' } }
        data-testid="email-input"
        placeholder="Email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        style={ { display: 'block' } }
        data-testid="password-input"
        placeholder="Password"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button type="button">Entrar</button>
    </form>
  );
}

export default Login;
