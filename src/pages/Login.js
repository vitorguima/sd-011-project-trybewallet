import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.btnState = this.btnState.bind(this);
  }

  btnState() {
    const form = document.getElementById('login-form');
    const btnSubmit = document.getElementById('submit-btn');
    btnSubmit.disabled = !form.checkValidity();
  }

  render() {
    const { dispatchEmail } = this.props;
    const { email } = this.state;
    const myStyle = {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      width: '30%',
      border: '3px solid #3C096C',
      marginTop: '200px',
      padding: '30px',
      borderRadius: '10px',
      color: '#FF9E00',
      backgroundColor: '#240046'
    }

    const btnStyle = {
      backgroundColor: '#5A189A',
      color: '#FF9E00 ',
      margin: '10px',
      marginLeft: '90px',
      with: '100px'
    }

    return (
      <div style={myStyle}>
        <form id="login-form" onChange={ this.btnState }>
          <div>
            <div>
              <label htmlFor="login-email" class="form-label">
                Login
              </label>
            </div>
              <input
                autocomplete='off'
                class="form-control"
                name="email"
                type="email"
                data-testid="email-input"
                className="login-email"
                required
                onChange={ (e) => this.setState({ email: e.target.value }) }
              />
          </div>
          <div>
            <div>
              <label htmlFor="login-pass">
                Senha
              </label>
            </div>
              <input
                type="password"
                data-testid="password-input"
                className="login-pass"
                pattern=".{6,}"
                required
              />
          </div>
          <div>
            <Link to="/carteira">
              <button
                style={btnStyle}
                type="button"
                id="submit-btn"
                onClick={ dispatchEmail(email) } // se mudar para arrow para o erro mas quebra o teste
                disabled
              >
                Entrar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchEmail: PropTypes.func.isRequired,
};
