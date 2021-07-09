import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <div>
          <div data-testid="email-field">
            {`Email: ${userEmail}`}
          </div>
          <div data-testid="total-field">
            0
          </div>
          <div data-testid="header-currency-field">
            BRL
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
