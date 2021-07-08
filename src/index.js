import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import './index.css';
import Provider from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <switch>
      <Router
        exact
        path="/"
        component={
          <Provider estore={ store }>
            <App />
          </Provider>
        }
      />
    </switch>
  </BrowserRouter>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
