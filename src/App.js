import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Login />) }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
