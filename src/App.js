import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import { fetchApiRequest } from './actions/index';

class App extends React.Component {
  componentDidMount() {
    const { FetchApi } = this.props;
    FetchApi();
  }

  render() {
    return (
      <>
        <h1>TrybeWallet</h1>
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  FetchApi: (state) => dispatch(fetchApiRequest(state)) });

App.propTypes = {
  FetchApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
