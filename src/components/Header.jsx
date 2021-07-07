import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends Component {
  render() {
    const { getEmail } = this.props;
    return (
      <div>
        <h5 data-testid="email-field">{getEmail}</h5>
        <p data-testid="total-field">0</p>
        <select data-testid="header-currency-field">
          <option>BRL</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
