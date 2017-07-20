import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home'
import House from './components/House'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/house/:houseId" render={ ({match}) => <House id={match.params.houseId}/> } />  
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
