import Base from './components/BaseContainer'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Section from './components/Section'
import Score from './components/Score'

import {getInitialState, setInitialState, reducer} from './reducers/reducer'

let initialState = getInitialState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

ReactDOM.render(
    <Provider store={store} >
        < Router >
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/exam" component={Base}/>
                <Route path="/auth/signup" component={SignUp}/>
                <Route path="/score" component={Score}/>
            </div>
        </ Router>
    </Provider>
    , document.getElementById('root')
);
