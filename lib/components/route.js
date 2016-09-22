import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components
import App from './App';
import Home from './Home';
import About from './About';

import Features from './Features';


export default (
  <Route path="/foo/" component={App}>
    <IndexRoute  path="/foo/" component={Home} />
    <Route path="/foo/about/:index" component={About} />
    <Route path="/foo/features" component={Features} />
  </Route>
);
