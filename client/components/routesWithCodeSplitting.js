import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import App from './App.jsx';

const errorLoading = (error) => console.log('error while loading module: ', error)

const loadRoute = (cb) => (module) => cb(null, module.default)

const about = (nextState, cb) => {
  System.import('./About.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const burgerContainer = (nextState, cb) => {
  System.import('../containers/BurgerContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const bunContainer = (nextState, cb) => {
  System.import('../containers/SelectBunContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const meatContainer = (nextState, cb) => {
  System.import('../containers/SelectMeatContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const cheeseContainer = (nextState, cb) => {
  System.import('../containers/SelectCheeseContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const saladContainer = (nextState, cb) => {
  System.import('../containers/SelectSaladContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const extraContainer = (nextState, cb) => {
  System.import('../containers/SelectExtraContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const completeOrderContainer = (nextState, cb) => {
  System.import('../containers/CompleteOrderContainer.jsx').then(loadRoute(cb)).catch(errorLoading);
}
const notFound = (nextState, cb) => {
  System.import('./NotFound.jsx').then(loadRoute(cb)).catch(errorLoading);
}

export default (
  <Route path="/" component={App}>
    <Route path="About" getComponent={about}></Route>
    <Route path="Burger" getComponent={burgerContainer}>
      <Route path="Bun" getComponent={bunContainer}/>
      <Route path="Meat" getComponent={meatContainer}/>
      <Route path="Cheese" getComponent={cheeseContainer}/>
      <Route path="Salad" getComponent={saladContainer}/>
      <Route path="Extra" getComponent={extraContainer}/>
      <Route path="Complete" getComponent={completeOrderContainer}/>
      <IndexRedirect to="/Burger/Bun" />
    </Route>
    <IndexRedirect to="/About" />
    <Route path="*" getComponent={notFound}></Route>
  </Route>
);
