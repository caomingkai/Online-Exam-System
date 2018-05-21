import Base from './BaseContainer'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux'
import Welcome from './components/Welcome'
import {SignUp} from './components/SignUp'
import Section from './components/Section'
import {initialState, reducer} from './reducers/reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

ReactDOM.render(
    <Provider store={store} >
        < Router >
            <div>
                <Route exact path="/" component={Welcome}/>
                <Route path="/exam" component={Base}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        </ Router>
    </Provider>
    , document.getElementById('root')
);
