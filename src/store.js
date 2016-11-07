import {combineReducers, createStore} from 'redux';

let initial = window.siteData;

function user (state = initial.user, action) {
    switch (action.type) {
        case 'YES':
            return {
                ...state,
                name: action.name,
                login: 'YES'
            };
        case 'NO':
            return {
                ...state,
                name: 'none',
                login: 'NO'
            };
        default:
            return state;
    }
}

function slide (state = initial.slide, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function primary (state = initial.primary, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function full (state = initial.full, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function leftContent (state = initial.leftContent, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function imageGallery (state = initial.imageGallery, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}

function rightContent (state = initial.rightContent, action) {
    switch (action.type) {
        case 'CHANGE_SLIDE':
            return state;
        default:
            return state;
    }
}


let reducer = combineReducers({user, slide, primary, full, leftContent, imageGallery, rightContent});

let store = createStore(reducer, initial);

export default store;
