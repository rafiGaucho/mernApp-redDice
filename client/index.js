import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initialState={}
const reducer=(state=initialState,actions)=>{
  switch (actions.type) {
    default: return {initialState};
  }
}

const store=createStore(
  reducer,
  applyMiddleware(thunk)
)
render(<Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
      </Provider>,document.getElementById('app')
    );
