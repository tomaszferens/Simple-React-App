import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../style/styles.scss';

import App from './components/App';
import StorePicker from './components/StorePicker';

const router = (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={StorePicker}></IndexRoute>
            <Route path="store/:storeId" component={App}></Route>
        </Route>
    </Router>
);

const root = document.getElementById('root');
render(router, root);