import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

export class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to ='/login'/>
          <Route path='/login' component = {Login}/>
          <Route path='/dashboard'  />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
