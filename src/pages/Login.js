import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'alguem@email.com',
      password: '123456'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail =  this.handleEmail.bind(this);
    this.handlePassword =  this.handlePassword.bind(this);
  }

  handleSubmit() {
    const { handleLogin } = this.props;
    const { email } = this.state
    handleLogin(email);
  }

  validateEmailAndPassword() {
    const validEmail = 'alguem@email.com'
    if(this.state.email === validEmail && this.state.password.length >= 6) {
      return false;
    } else {
      return true;
    }
  }

  handleEmail(event) {
    this.setState( {
      email: event.target.value
    });
  }
  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const disabled = this.validateEmailAndPassword();
    return (
      <div>
        <label>
          Email:
          <input 
            type="text" 
            name="email" 
            data-testid="email-input"
            value={this.state.email}
            onChange={this.handleEmail}
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            data-testid="password-input"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </label>
        <button disabled={disabled} onClick={this.handleSubmit}>
          Entrar
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email) => dispatch(handleLogin(email))
});

export default connect(null, mapDispatchToProps)(Login);
