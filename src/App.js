import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App(props) {
  const { isLogged } = props;
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
      { isLogged
        ? <Redirect to="/carteira" />
        : <Redirect to="/" /> }
    </main>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  isLooged: PropTypes.string,
}.isRequired;
