import  React from 'react';
import  ReactDOM  from 'react-dom';
import { browserHistory, Router } from 'react-router';
import DataWraper from '../lib/components/DataWraper';
import routes from '../lib/components/route';

const  data = window.__INITIAL_STATE__;



ReactDOM.render(
  <DataWraper data={ data }><Router routes={routes} history={browserHistory} /></DataWraper>
  ,document.getElementById('app')
);


// ReactDOM.render(<App {...initialProps} />, document.getElementById('app'));
