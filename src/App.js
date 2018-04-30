import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Redirect,IndexRoute } from 'react-router';
import { HashRouter, Link, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import './less/main.less';

const App = () => (
  <HashRouter>
    <div>
    <Switch>
      <Route path="/" component={Home} />
      </Switch>
    </div>
  </HashRouter>
);

export default hot(module)(App)