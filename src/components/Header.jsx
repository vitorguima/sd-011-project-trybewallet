import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <div className="header">
        <h1>TrybeWallet</h1>
        <div className="user-info">
          <div className="user-info-container">
            <p data-testid="email-field">{email}</p>
          </div>
          <div className="user-info-container">
            <p>
              Dispesa Total:
              <span data-testid="total-field">{total}</span>
              <span data-testid="header-currency-field">{currency}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
