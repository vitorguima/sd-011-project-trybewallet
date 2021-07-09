import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <header>
          <h3>Trybe Wallet</h3>
          <p data-testid="email-field">{`Login: ${userEmail}`}</p>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <section />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
