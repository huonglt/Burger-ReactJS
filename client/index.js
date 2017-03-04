import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './components/routes.js';
import { Router, browserHistory } from 'react-router';
import { reducers } from './redux/reducers.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.css';

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>, document.getElementById('app')
);
