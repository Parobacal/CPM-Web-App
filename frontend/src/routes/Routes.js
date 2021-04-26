import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../views/login';
import Home from '../views/home';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
