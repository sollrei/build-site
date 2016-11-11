import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {store} from './store/store';
import App from './App';
import Home from './Home';
import Page from './Page';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} getState={store.getState}>
                <IndexRoute component={Home} />
                <Route path="index" component={Home} />
                <Route path="page" component={Page} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

