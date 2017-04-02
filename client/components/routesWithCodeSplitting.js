import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import App from './App.jsx';

const errorHandler = (err) => console.log('error while loading module: ', err);
const asyncLoad = (moduleLoader, cb) => {
  moduleLoader.then(module => cb(null, module.default)).catch(errorHandler);
}
const about = (nextState, cb) => {
  asyncLoad(System.import('./About.jsx'), cb);
}
const burgerContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/BurgerContainer.jsx'), cb);
}
const bunContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/SelectBunContainer.jsx'), cb);
}
const meatContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/SelectMeatContainer.jsx'), cb);
}
const cheeseContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/SelectCheeseContainer.jsx'),cb);
}
const saladContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/SelectSaladContainer.jsx'), cb);
}
const extraContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/SelectExtraContainer.jsx'), cb);
}
const completeOrderContainer = (nextState, cb) => {
  asyncLoad(System.import('../containers/CompleteOrderContainer.jsx'), cb);
}
const notFound = (nextState, cb) => {
  asyncLoad(System.import('./NotFound.jsx'), cb);
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
