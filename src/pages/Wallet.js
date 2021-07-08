import React from 'react';
import { connect } from 'react-redux';
import { user } from '../reducers/user';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.emailState);
  }

  render() {
    return <div>{this.props.emailState}</div>;
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

export default connect(mapStateToProps, null)(Wallet);
