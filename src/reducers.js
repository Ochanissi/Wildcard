import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
    searchField: ''
}

export const searchCharacters = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SEARCHFIELD:
            return Object.assign({}, state, searchField:action.payload);
            return { ..state, searchField:action.payload}; // Object destructuring / Object spread operator
        default:
            return state;
    }
}