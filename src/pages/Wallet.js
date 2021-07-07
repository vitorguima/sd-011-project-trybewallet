import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      spends: 0,
      exchange: 'BRL',
    };
    this.setEmail = this.setEmail.bind(this);
  }

  componentDidMount() {
    const { email } = this.props;
    this.setEmail(email);
  }

  setEmail(email) {
    this.setState({
      email,
    });
  }

  render() {
    const {
      email,
      spends,
      exchange,
    } = this.state;
    return (
      <div>
        <Header email={ email } spends={ spends } exchange={ exchange } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
