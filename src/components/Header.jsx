import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { storeEmail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ storeEmail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  storeEmail: state.user.email,
});

Header.propTypes = ({
  storeEmail: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps, null)(Header);
