import React from 'react';
import { useHistory } from 'react-router';
import Login from './pages/Login';

function App() {
  const history = useHistory();
  return (
  <div>
    <Login history={history} />
  </div>
  );
}

export default App;
