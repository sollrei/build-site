import {createStore} from 'redux';
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

function full (state = initial.get('full'), action) {
    switch (action.type) {
        case 'EDIT_FULL':
            let section,
                d,
                actionData = action.data,
                sSection = state.get('section'),
                sData = state.get('data');

            if (actionData.section) {
                section = sSection.merge(sSection, actionData.section);
            } else {
                section = sSection;
            }

            if (actionData.data) {

                d = sData.map((item) => {
                    if (item.get('id') === actionData.data.id) {
                        return item.merge(item, actionData.data);
                    }
                    return item;
                });
            } else {
                d = sData;
            }

            return Object.assign({}, state, {
                section: section,
                data: d
            });

        default:
            return state;
    }

}

function leftContent (state = initial.get('leftContent'), action) {
    switch (action.type) {
        case 'EDIT_LEFT_CONTENT':
            return state.merge(state, action.data);
        default:
            return state;
    }
}

function imageGallery (state = initial.get('imageGallery'), action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function rightContent (state = initial.get('rightContent'), action) {
    switch (action.type) {
        case 'EDIT_RIGHT_CONTENT':
            return state.merge(state, action.data);
        default:
            return state;
    }
}

let reducer = combineReducers({
    primary, editable, editContent, slide, full, leftContent, imageGallery, rightContent,
    routing: routerReducer
});

export const store = createStore(reducer, initial);

