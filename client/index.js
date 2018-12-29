import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Router,browserHistory} from 'react-router';
import routes from './routes.js'

render(<Router history={browserHistory} routes={routes}/>,document.getElementById('app'));
