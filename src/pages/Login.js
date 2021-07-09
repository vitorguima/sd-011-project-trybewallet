import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

// Requisito 1, componentizado LogiForm e Button que compõe o formulário.

export default Login;
