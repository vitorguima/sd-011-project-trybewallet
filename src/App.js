import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Provider } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Login />
      </Provider>
    </BrowserRouter>
  )
}

export default App;
