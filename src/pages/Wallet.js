import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SpendForm from '../components/SpendForm';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      spends: 0,
      exchange: 'BRL',
      acronymsCurrency: [],
    };
    this.setEmail = this.setEmail.bind(this);
    this.setAcronymsCurrency = this.setAcronymsCurrency.bind(this);
  }

  componentDidMount() {
    const { email } = this.props;
    this.setEmail(email);
    this.getAcronymsCurrency();
  }

  setEmail(email) {
    this.setState({
      email,
    });
  }

  setAcronymsCurrency(dataExchange) {
    const acronyms = Object.keys(dataExchange);
    const acronymsCurrency = acronyms.filter((acron) => acron !== 'USDT');
    this.setState({
      acronymsCurrency,
    });
  }

  async getAcronymsCurrency() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    try {
      const request = await fetch(url);
      const response = await request.json();
      this.setAcronymsCurrency(response);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  render() {
    const {
      email,
      spends,
      exchange,
      acronymsCurrency,
    } = this.state;
    return (
      <div>
        <Header email={ email } spends={ spends } exchange={ exchange } />
        <SpendForm acronyms={ acronymsCurrency } />
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
