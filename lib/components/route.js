import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './App';
import Home from './Home';
import About from './About';

import Features from './Features';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about/:index" component={About} />
    <Route path="features" component={Features} />
  </Route>
);
