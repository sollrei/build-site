import {combineReducers, createStore} from 'redux';

let storage = window.localStorage.getItem('siteData');

let initial = storage ? JSON.parse(storage) : window.siteData;

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
        case 'EDIT_PRIMARY':
            return state.map((item) => {
                if (item.id === action.data.id) {
                    return Object.assign({}, item, action.data);
                }
                return item;
            });
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

function editContent (state = initial.editContent, action) {
    switch (action.type) {
        case 'EDIT_CONTENT':
            return {
                edit: true,
                data: action.data
            };
        case 'CLOSE_EDIT':
            return {
                edit: false
            };
        default:
            return state;
    }
}


let reducer = combineReducers({user, slide, primary, full, leftContent, imageGallery, rightContent, editContent});

let store = createStore(reducer, initial);

export default store;
