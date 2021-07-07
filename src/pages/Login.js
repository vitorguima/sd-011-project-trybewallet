import React from 'react';
import { connect } from 'react-redux';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.changeValue = this.changeValue.bind(this);
    this.isValidEmail = this.isValidEmail.bind(this);
    this.isValidPassword = this.isValidPassword.bind(this);
    this.validation = this.validation.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.validation()
  }
  
  async changeValue({ target }) {
    const { name, value } = target;
    await this.setState({
      [name]: value,
    })
    await this.validation()
  }

  isValidEmail() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const { email } = this.state;
    if (regex.test(email)) {
      return true;
    }
    return false;
  }

  isValidPassword() {
    const { password } = this.state;
    if (password.length >= 6) {
      return true;
    }
    return false;
  }

  validation() {
    const submitBtn = document.querySelector('.submit-btn');
    const { sendEmail } = this.props;
    const { email } = this.state;
    const emailValid = this.isValidEmail();
    const passwordValid = this.isValidPassword();
    if (emailValid && passwordValid) {
      sendEmail(email);
      submitBtn.disabled = false;
      submitBtn.enabled = true;
    } else {
      submitBtn.disabled = true;
    }
  }

  submit() {
    const { history, stateEmail } = this.props;
    console.log(stateEmail);
    console.log(stateEmail.email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state
    return (
      <form>
        <input type="email" data-testid="email-input" name="email" placeholder="E-mail" onChange={ this.changeValue } value={ email } />
        <input type="password" data-testid="password-input" name="password" placeholder="Passowrd" onChange={ this.changeValue } value={ password } /> 
        <button type="button" onClick={ this.submit } className="submit-btn">Entrar</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  stateEmail: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  sendEmail: (state) => dispatch(emailAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
