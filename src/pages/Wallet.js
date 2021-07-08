import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailState } = this.props;
    return <div>{emailState}</div>;
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

Wallet.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
