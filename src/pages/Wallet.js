import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './Form';
import API from '../services/baseAPI';
import { getCurrency } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      initialValue: 0,
    };
  }

  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const fetchAPI = await API();
    const { propFetch } = this.props;
    const data = Object.keys(fetchAPI).filter((element) => element !== 'USDT');
    propFetch(data);
  }

  render() {
    const { login } = this.props;
    const { initialValue } = this.state;

    return (
      <main>
        <header>
          <span data-testid="email-field">{ login }</span>
          <div>
            Despesa total: R$
            <span data-testid="total-field">{ initialValue }</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
        <Form />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  propFetch: (payload) => dispatch(getCurrency(payload)),
});

Wallet.propTypes = ({
  login: PropTypes.string,
  propFetch: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
