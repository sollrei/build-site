import {createStore} from 'redux';
// import {routerReducer} from 'react-router-redux';
import routerReducer from './routeReducer';

import Immutable from 'immutable';
import {
    combineReducers
} from 'redux-immutable';
const initial = Immutable.fromJS(window.site);

function editContent (state = initial.get('editContent'), action) {
    switch (action.type) {
        case 'EDIT_CONTENT':
            return Immutable.fromJS({
                edit: true,
                data: action.data
            });
        case 'CLOSE_EDIT':
            return state.update('edit', false);
        default:
            return state;
    }
}

function slide (state = initial.get('slide'), action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function editable (state = initial.get('editable'), action) {
    switch (action.type) {
        case 'EDITABLE':
            return true;
        case 'NOT_EDITABLE':
            return false;
        default:
            return state;
    }
}

function primary (state = initial.get('primary'), action) {
    switch (action.type) {
        case 'EDIT_PRIMARY':
            return state.map(item => {
                if (item.get('id') === action.data.id) {
                    return item.merge(item, action.data);
                }
                return item;
            });
        default:
            return state;
    }
}


let reducer = combineReducers({
    primary, editable, editContent, slide,
    routing: routerReducer
});

export const store = createStore(reducer, initial);

