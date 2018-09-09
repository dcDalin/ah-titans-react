import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Home/components';
import Login from '../../Login';
import NotFound from '../../Error_pages/components/page_not_found';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
