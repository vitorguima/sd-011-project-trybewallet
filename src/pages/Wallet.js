import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      initialValue: 0,
    };
  }

  render() {
    const { userEmail } = this.props;
    const { initialValue } = this.state;

    return (
      <div>
        <header>
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{ initialValue }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userEmail: user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
