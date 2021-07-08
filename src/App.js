import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotAPage from './pages/NotAPage';

export const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/" component={Wallet} />
        <Route component={NotAPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
