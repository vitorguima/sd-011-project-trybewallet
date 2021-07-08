import React from 'react';
import { connect } from 'react-redux';

export const Login = (props) => {
    return (
        <div className="login-page">
          <div className="login-container">
            <img
                src="../assets/Trybe_logo-baixa.png"
                alt="logo trybe"
                className="login-logo"
            />
            <input
                type="email"
                id="email"
                placeholder="Email"
                data-testid="email-input"
                className="login-input"
            />
            <input
                type="password"
                id="password"
                placeholder="password"
                data-testid="password-input"
                className="login-input"
            />
            <button className="login-button">Entrar</button>
          </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
