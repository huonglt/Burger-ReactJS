import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import App from './App.jsx';
import NotFound from './NotFound.jsx';
import About from './About.jsx';
import BurgerContainer from '../containers/BurgerContainer.jsx';
import SelectBunContainer from '../containers/SelectBunContainer.jsx';
import SelectMeatContainer from '../containers/SelectMeatContainer.jsx';
import SelectCheeseContainer from '../containers/SelectCheeseContainer.jsx';
import SelectSaladContainer from '../containers/SelectSaladContainer.jsx';
import SelectExtraContainer from '../containers/SelectExtraContainer.jsx';
import CompleteOrderContainer from '../containers/CompleteOrderContainer.jsx';

export default (
  <Route path="/" component={App}>
    <Route path="About" component={About}></Route>
    <Route path="Burger" component={BurgerContainer}>
      <Route path="Bun" component={SelectBunContainer}/>
      <Route path="Meat" component={SelectMeatContainer}/>
      <Route path="Cheese" component={SelectCheeseContainer}/>
      <Route path="Salad" component={SelectSaladContainer}/>
      <Route path="Extra" component={SelectExtraContainer}/>
      <Route path="Complete" component={CompleteOrderContainer}/>
      <IndexRedirect to="/Burger/Bun" />
    </Route>
    <IndexRedirect to="/About" />
    <Route path="*" component={NotFound}></Route>
  </Route>
);
