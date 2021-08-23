import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import boardGamesReducer from './reducers/reducer-combine'
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(boardGamesReducer)}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);