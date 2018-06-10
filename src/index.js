import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca
class Main extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='/' component={App} />
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
