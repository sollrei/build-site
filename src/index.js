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

import falcor from 'falcor';

const sModel = new falcor.Model({
    cache: {
        todos: [
            {
                name: 'get milk from corner store',
                done: false
            }
        ]
    }
});

sModel.getValue('todos[0]["name", "done"]').then(name => console.log(name));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} getState={store.getState}>
                <IndexRoute component={Home} model={sModel}/>
                <Route path="page" component={Page} model={sModel}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

