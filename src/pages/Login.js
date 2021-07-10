import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sendLogin from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClik = this.handleClik.bind(this);
  }

  handleClik() {
    const { getUser } = this.props;
    const { email } = this.state;
    getUser(email);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => { // segundo parametro do setstate para regularizar a sincronicidade
      const { email, password } = this.state;
      const number = 6;
      if (/^[\w0-9.]+@\w+\.com$/.test(email) && password.length >= number) {
        this.setState({
          button: false,
        });
      } else {
        this.setState({
          button: true,
        });
      }
    });
  }

  render() {
    const { button } = this.state;
    return (
      <div>
        <h1> Faça seu Login</h1>
        <form className="Login">
          <label htmlFor="email-input">
            email:
            <input
              // id="email-input"
              data-testid="email-input"
              name="email"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              name="button"
              disabled={ button } // quando disabled recebe true ele fica desativado.
              type="button"
              onClick={ this.handleClik }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: (email) => dispatch(sendLogin(email)),
});
Login.propTypes = {
  getUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
