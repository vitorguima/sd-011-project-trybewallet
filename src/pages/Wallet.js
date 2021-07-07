import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  console.log(this.props)
  render() {
    return <div>oi</div>;
  }
}

const mapStateToProps = (state) => ({
  emailState: state.myReducer.state });

export default connect(mapStateToProps, null)(Wallet);
