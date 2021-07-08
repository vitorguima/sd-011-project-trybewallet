import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';
import styles from './Login.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disable: true,
      error: null,
      redirect: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleClick(event) {
    const { email, password } = this.state;
    event.preventDefault();
    const { user } = this.props;
    this.setState({ redirect: true });
    user({ email, password });
  }

  handleChangeEmail({ target }) {
    const { email, password } = this.state;
    const isValid = target.checkValidity();
    if (isValid) {
      this.setState({ email: target.value });
    }
    if (email && password) {
      this.setState({ disable: false });
    }
  }

  handleChangePassword({ target }) {
    const { email } = this.state;
    const isValid = target.checkValidity();
    if (isValid) {
      this.setState({ password: target.value });
    }
    if (email && isValid) {
      this.setState({ disable: false });
    }
  }

  handleOnBlur({ target }) {
    if (target.value.length === 0) {
      this.setState({ error: 'Preencha um valor' });
    }
    if (target.value.length > 0) {
      this.setState({ error: null });
    }
  }

  render() {
    const { disable, error, redirect } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            style={ { display: 'block' } }
            data-testid="email-input"
            placeholder="Email"
            onChange={ this.handleChangeEmail }
            onBlur={ this.handleOnBlur }
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Informe um email válido."
          />
          <input
            type="password"
            style={ { display: 'block' } }
            data-testid="password-input"
            placeholder="Password"
            onChange={ this.handleChangePassword }
            onBlur={ this.handleOnBlur }
            pattern=".{6,}"
            title="A senha deve ter, ao menos, 9 caracteres."
          />
          <p>{error !== null ? error : null}</p>
          <button
            type="button"
            disabled={ disable }
            className={ styles.button }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
          {redirect && <Redirect to="/carteira" />}
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (payload) => dispatch(login(payload)),
});

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
