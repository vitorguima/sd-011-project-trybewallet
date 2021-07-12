import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { setEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  // isDisable() {
  //   const parseEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  //   const textEmail = document.getElementsByClassName('email');
  //   const textPassword = document.getElementsByClassName('password');
  //   const minOfCaracteres = 6;
  //   if (textEmail.value !== parseEmail && textPassword.value.length >= minOfCaracteres) {
  //     return true;
  //   } return false;
  // }

  handleChangeEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  handleChangePassword({ target }) {
    this.setState({
      password: target.value,
    });
  }

  // inicia disable true, se email === verificado regex e password.lenght
  // for maior que 6, --> [disable = false]

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          Email:
          <input
            value={ email }
            id="email-input"
            type="email"
            data-testid="email-input"
            className="email"
            placeholder="Digite seu email"
            onChange={ this.handleChangeEmail }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            id="password-input"
            type="password"
            data-testid="password-input"
            className="password"
            value={ password }
            placeholder="Digite sua senha"
            onChange={ this.handleChangePassword }
          />
        </label>
        <Link to="/carteira">
          <button type="submit" disabled>
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   username: state.user.email,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setEmailAction: (payload) => dispatch(setEmail(payload)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
