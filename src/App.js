import {Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'
import Login from './pages/Login'

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Login }/>
        </Switch>
      </div>
    )
  }
}

