import { 
    CHANGE_SEARCHFIELD,
    REQUEST_CHARACTERS_PENDING,
    REQUEST_CHARACTERS_SUCCESS,
    REQUEST_CHARACTERS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchCharacters = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateCharacters = {
    characters: [],
    isPending: false
}

export const requestCharacters = (state=initialStateCharacters, action={}) => {
    switch (action.type) {
        case REQUEST_CHARACTERS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_CHARACTERS_SUCCESS:
            return Object.assign({}, state, { characters: action.payload, isPending: false });
        case REQUEST_CHARACTERS_FAILED:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
    }
}