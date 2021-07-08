import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <Button />
      </div>
    );
  }
}

// Requisito 1, componentizado LogiForm e Button que compõe o formulário.

export default Login;
