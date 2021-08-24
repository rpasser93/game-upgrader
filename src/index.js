import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/reducer-combine'
import IndividualBoardgame from './components/individual-boardgame';
import App from './App';
import SearchResults from './components/search-results';

// Create a store using redux-thunk to let actions return functions
// This allows us to chain action calls and handle errors in a much cleaner fashion
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/games' component={App}/>
        <Route path='/games/:id' render={(routerProps) => (
          <IndividualBoardgame 
          id={parseInt(routerProps.match.params.id, 10)}
          history={routerProps.history}
          />     
        )}/>
        <Route path='/results' component={SearchResults}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);