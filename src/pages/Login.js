import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super()
  
    this.state = {
      email: '',
      senha: '',
    }
  }

  render() {

    function btnState() {
      const form = document.getElementById('login-form');
      const btnSubmit = document.getElementById('submit-btn')
      btnSubmit.disabled = !form.checkValidity();
    }

    return (
      <div>
        <form id="login-form" onChange={btnState}>
          <label htmlFor="login-email">
            Login
            <input type="email" data-testid="email-input" className="login-email" required onChange={(e) => this.setState({email: e.target.value})}/>
          </label>
          <label htmlFor="login-pass">
            Senha
            <input type="password" data-testid="password-input" className="login-pass" minLength='6' required/>
          </label>
          <Link to='/carteira'>
            <button type="submit" id='submit-btn' disabled>Entrar</button>
          </Link>
        </form>
      </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    
  })
}

export default connect(null, mapDispatchToProps)(Login);
