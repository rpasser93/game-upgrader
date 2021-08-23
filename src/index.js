import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer-combine'
import promise from 'redux-promise';
import IndividualBoardgame from './components/individual-boardgame';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
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
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);