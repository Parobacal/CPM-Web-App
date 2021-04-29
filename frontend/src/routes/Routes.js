import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../views/login';
import Home from '../views/home';
import Query1 from '../views/query1';
import Query2 from '../views/query2';
import Query3 from '../views/query3';
import Query4 from '../views/query4';
import Query5 from '../views/query5';
import Query6 from '../views/query6';
import Query7 from '../views/query7';
import Query8 from '../views/query8';
import Query9 from '../views/query9';
import Query10 from '../views/query10';
import Query11 from '../views/query11';
import Query12 from '../views/query12';
import Query13 from '../views/query13';
import Query14 from '../views/query14';
import Query15 from '../views/query15';
import Query16 from '../views/query16';
import Query17 from '../views/query17';
import Query18 from '../views/query18';
import Query19 from '../views/query19';
import Query20 from '../views/query20';
import Country from '../views/country';
import Question from '../views/question';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/query1" component={Query1}/>
        <Route exact path="/query2" component={Query2}/>
        <Route exact path="/query3" component={Query3}/>
        <Route exact path="/query4" component={Query4}/>
        <Route exact path="/query5" component={Query5}/>
        <Route exact path="/query6" component={Query6}/>
        <Route exact path="/query7" component={Query7}/>
        <Route exact path="/query8" component={Query8}/>
        <Route exact path="/query9" component={Query9}/>
        <Route exact path="/query10" component={Query10}/>
        <Route exact path="/query11" component={Query11}/>
        <Route exact path="/query12" component={Query12}/>
        <Route exact path="/query13" component={Query13}/>
        <Route exact path="/query14" component={Query14}/>
        <Route exact path="/query15" component={Query15}/>
        <Route exact path="/query16" component={Query16}/>
        <Route exact path="/query17" component={Query17}/>
        <Route exact path="/query18" component={Query18}/>
        <Route exact path="/query19" component={Query19}/>
        <Route exact path="/query20" component={Query20}/>
        <Route exact path="/country" component={Country}/>
        <Route exact path="/question" component={Question}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
