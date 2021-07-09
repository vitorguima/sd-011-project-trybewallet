// import React from 'react';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Wallet({ email }) {
  return (
    <div>
      <h1> testando aqui</h1>
      <header>
        <h2 data-testid="email-field">
          Bem vindo
          { email }
        </h2>
      </header>
    </div>
  );
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

Wallet.propTypes = {
  email: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
