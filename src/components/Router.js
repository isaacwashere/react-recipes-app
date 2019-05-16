import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import MoreInfoRecipe from '../components/MoreInfoRecipe';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App } exact />
      <Route path="/recipe/:id" component={ MoreInfoRecipe } />
    </Switch>
  </BrowserRouter>
);

export default Router;
